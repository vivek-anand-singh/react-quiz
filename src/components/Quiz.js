import { useParams, useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  FormGroup,
  LinearProgress,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { getQuizQuestions } from '../services/quizService';
import styled from 'styled-components';

const StyledQuizContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const StyledQuestion = styled(Typography)`
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const StyledProgress = styled(LinearProgress)`
  margin-bottom: 20px;
`;

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setLoading(true);
    getQuizQuestions(id)
      .then((fetchedQuestions) => {
        setQuestions(fetchedQuestions);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleAnswer = (event) => {
    const { value, checked } = event.target;
    if (questions[currentQuestion].type === 'multiple') {
      setSelectedAnswers((prev) =>
        checked
          ? [...prev, value]
          : prev.filter((answer) => answer !== value)
      );
    } else {
      setSelectedAnswers([value]);
    }
  };

  const handleNext = () => {
    const currentQ = questions[currentQuestion];
    if (currentQ.type === 'multiple') {
      if (
        currentQ.correctAnswers.length === selectedAnswers.length &&
        currentQ.correctAnswers.every((answer) => selectedAnswers.includes(answer))
      ) {
        setScore(score + 1);
      }
    } else if (selectedAnswers[0] === currentQ.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswers([]);
    } else {
      navigate('/result', { state: { score, total: questions.length } });
    }
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <StyledQuizContainer>
      <StyledProgress variant="determinate" value={progress} />
      <StyledQuestion variant="h5">{currentQ.question}</StyledQuestion>
      {currentQ.type === 'multiple' ? (
        <FormGroup>
          {currentQ.choices.map((choice) => (
            <FormControlLabel
              key={choice}
              control={
                <Checkbox
                  checked={selectedAnswers.includes(choice)}
                  onChange={handleAnswer}
                  value={choice}
                />
              }
              label={choice}
            />
          ))}
        </FormGroup>
      ) : (
        <RadioGroup value={selectedAnswers[0] || ''} onChange={handleAnswer}>
          {currentQ.choices.map((choice) => (
            <FormControlLabel
              key={choice}
              value={choice}
              control={<Radio />}
              label={choice}
            />
          ))}
        </RadioGroup>
      )}
      <StyledButton
        variant="contained"
        color="primary"
        onClick={handleNext}
        disabled={selectedAnswers.length === 0}
      >
        {currentQuestion + 1 === questions.length ? 'Finish' : 'Next'}
      </StyledButton>
    </StyledQuizContainer>
  );
};

export default Quiz;
