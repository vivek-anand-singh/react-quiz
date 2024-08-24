import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizSelection from './components/Quizselection';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Header from './components/Header';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
  <Header toggleDarkMode={toggleDarkMode} />
  <Routes>
    <Route path="/" element={<QuizSelection />} />
    <Route path="/quiz/:id" element={<Quiz />} />
    <Route path="/result" element={<Result />} />
  </Routes>
</Router>
    </ThemeProvider>
  );
};

export default App;