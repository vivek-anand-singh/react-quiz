import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import styled from 'styled-components';

const StyledResultContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const StyledScore = styled(Typography)`
  margin: 20px 0;
`;

const Result = () => {
  const location = useLocation();
  const { score, total } = location.state;

  return (
    <StyledResultContainer>
      <Typography variant="h4">Quiz Completed!</Typography>
      <StyledScore variant="h5">
        Your Score: {score} out of {total}
      </StyledScore>
      <Button component={Link} to="/" variant="contained" color="primary">
        Try Another Quiz
      </Button>
    </StyledResultContainer>
  );
};

export default Result;