import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Typography, Button, Container, Box, Paper, Divider, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Check, Close } from '@mui/icons-material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
}));

const QuestionPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.grey[100],
}));

const Result = () => {
  const location = useLocation();
  const { score, total, answers } = location.state;

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h3" gutterBottom align="center">
          Quiz Results
        </Typography>
        <StyledPaper elevation={3}>
          <Typography variant="h4" gutterBottom>
            Your Score: {score} out of {total}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Percentage: {((score / total) * 100).toFixed(2)}%
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>
            Question Review:
          </Typography>
          {answers.map((answer, index) => (
            <QuestionPaper key={index} elevation={1}>
              <Typography variant="h6" gutterBottom>
                Question {index + 1}: {answer.question.question}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Your answer: {answer.selectedAnswers.join(', ')}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Correct answer: {Array.isArray(answer.question.correctAnswer) 
                  ? answer.question.correctAnswer.join(', ')
                  : answer.question.correctAnswer}
              </Typography>
              <Chip
                icon={answer.isCorrect ? <Check /> : <Close />}
                label={answer.isCorrect ? 'Correct' : 'Incorrect'}
                color={answer.isCorrect ? 'success' : 'error'}
              />
            </QuestionPaper>
          ))}
        </StyledPaper>
        <Box mt={3} display="flex" justifyContent="center">
          <Button component={Link} to="/" variant="contained" color="primary" size="large">
            Try Another Quiz
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Result;