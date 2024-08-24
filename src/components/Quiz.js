import React, { useState, useEffect } from 'react';
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
  Paper,
  Container,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { getQuizQuestions } from '../services/quizService';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setLoading(true);
    getQuizQuestions(id)
      .then(fetchedQuestions => {
        setQuestions(fetchedQuestions);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

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
    let isCorrect = false;

    if (currentQ.type === 'multiple') {
      isCorrect = currentQ.correctAnswers.length === selectedAnswers.length &&
        currentQ.correctAnswers.every((answer) => selectedAnswers.includes(answer));
    } else {
      isCorrect = selectedAnswers[0] === currentQ.correctAnswer;
    }

    if (isCorrect) setScore(score + 1);

    setAnswers([...answers, { question: currentQ, selectedAnswers, isCorrect }]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswers([]);
    } else {
      navigate('/result', { state: { score, total: questions.length, answers } });
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;
  if (questions.length === 0) return <Typography>No questions available.</Typography>;

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Question {currentQuestion + 1} of {questions.length}
        </Typography>
        <LinearProgress variant="determinate" value={progress} />
        <StyledPaper elevation={3}>
          <Typography variant="h5" gutterBottom>
            {currentQ.question}
          </Typography>
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
            fullWidth
          >
            {currentQuestion + 1 === questions.length ? 'Finish' : 'Next'}
          </StyledButton>
        </StyledPaper>
      </Box>
    </Container>
  );
};

export default Quiz;