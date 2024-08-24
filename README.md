# Interactive Quiz App

## Description

This Interactive Quiz App is a dynamic and engaging React-based application that allows users to test their knowledge across various subjects. With a sleek, modern UI powered by Material-UI, the app offers an intuitive and responsive user experience across different devices.

## Features

- **Multiple Quiz Categories**: Choose from a variety of quiz topics including General Knowledge and Science.
- **Dynamic Question Types**: Supports multiple-choice (single answer), multiple-select, and true/false questions.
- **Interactive UI**: Engaging user interface with progress tracking and immediate feedback.
- **Detailed Results**: Comprehensive result page showing score, percentage, and a question-by-question breakdown.
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.

## Technologies Used

- React
- React Router for navigation
- Material-UI for styling and components
- Styled-components for additional custom styling

## Usage

1. On the home page, select a quiz category.
2. Answer each question by selecting the appropriate option(s).
3. Click 'Next' to move to the following question.
4. After completing all questions, view your results on the summary page.
5. From the results page, you can choose to try another quiz.

## Project Structure

```plaintext
quiz-app/
│
├── src/
│   ├── components/
│   │   ├── QuizSelection.js
│   │   ├── Quiz.js
│   │   ├── Result.js
│   │   └── Header.js
│   │
│   ├── services/
│   │   └── quizService.js
│   │
│   ├── App.js
│   └── index.js
│
├── public/
│   └── index.html
│
├── package.json
└── README.md

``` 


## Acknowledgments

- Thanks to the React and Material-UI communities for their excellent documentation and resources.
- Icons provided by Material-UI icons library.
