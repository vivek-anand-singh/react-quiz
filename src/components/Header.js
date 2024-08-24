import React from 'react';
import { AppBar, Toolbar, Typography, Switch, FormControlLabel } from '@mui/material';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  margin-bottom: 20px;
`;

const Header = ({ toggleDarkMode }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Quiz App
        </Typography>
        <FormControlLabel
          control={<Switch onChange={toggleDarkMode} />}
          label="Dark Mode"
        />
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;