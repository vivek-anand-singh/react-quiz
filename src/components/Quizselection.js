import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, Paper, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { School, Science, History } from '@mui/icons-material';
import { getQuizzes } from '../services/quizService';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  fontSize: '4rem',
  marginBottom: theme.spacing(2),
}));

const quizIcons = {
  'General Knowledge': <School fontSize="inherit" />,
  'Science': <Science fontSize="inherit" />,
  'History': <History fontSize="inherit" />,
};

const QuizSelection = () => {
  const quizzes = getQuizzes();

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Choose Your Quiz Adventure
        </Typography>
        <Grid container spacing={4}>
          {quizzes.map((quiz) => (
            <Grid item xs={12} sm={6} md={4} key={quiz.id}>
              <StyledPaper elevation={3}>
                <IconWrapper color="primary">
                  {quizIcons[quiz.title]}
                </IconWrapper>
                <Typography variant="h5" component="h2" gutterBottom>
                  {quiz.title}
                </Typography>
                <Button
                  component={Link}
                  to={`/quiz/${quiz.id}`}
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Start Quiz
                </Button>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default QuizSelection;