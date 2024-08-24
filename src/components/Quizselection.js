import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid } from '@mui/material';
import styled from 'styled-components';

const quizzes = [
  { id: 1, title: 'General Knowledge' },
  { id: 2, title: 'Science' },
  { id: 3, title: 'History' },
];

const StyledButton = styled(Button)`
  margin: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const QuizSelection = () => {
  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid item>
        <Typography variant="h4" gutterBottom>
          Select a Quiz
        </Typography>
      </Grid>
      {quizzes.map((quiz) => (
        <Grid item key={quiz.id}>
          <StyledButton
            component={Link}
            to={`/quiz/${quiz.id}`}
            variant="contained"
            color="primary"
            size="large"
          >
            {quiz.title}
          </StyledButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default QuizSelection;