// src/services/quizService.js

// This is a mock database of quizzes. In a real application, you'd fetch this from an API.
const quizzes = {
    1: {
      id: 1,
      title: 'General Knowledge',
      questions: [
        {
          id: 1,
          type: 'single',
          question: 'What is the capital of France?',
          choices: ['London', 'Berlin', 'Paris', 'Madrid'],
          correctAnswer: 'Paris',
        },
        {
          id: 2,
          type: 'multiple',
          question: 'Which of these are planets?',
          choices: ['Earth', 'Moon', 'Mars', 'Sun'],
          correctAnswers: ['Earth', 'Mars'],
        },
        {
          id: 3,
          type: 'single',
          question: 'Who wrote "Hamlet"?',
          choices: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Leo Tolstoy'],
          correctAnswer: 'William Shakespeare',
        },
        {
          id: 4,
          type: 'boolean',
          question: 'The Great Wall of China is visible from space.',
          choices: ['True', 'False'],
          correctAnswer: 'False',
        },
        {
          id: 5,
          type: 'single',
          question: 'What is the tallest mountain in the world?',
          choices: ['K2', 'Kangchenjunga', 'Mount Everest', 'Lhotse'],
          correctAnswer: 'Mount Everest',
        },
        {
          id: 6,
          type: 'multiple',
          question: 'Which of these are programming languages?',
          choices: ['Python', 'HTML', 'CSS', 'Java'],
          correctAnswers: ['Python', 'Java'],
        },
        {
          id: 7,
          type: 'single',
          question: 'What is the hardest natural substance on Earth?',
          choices: ['Gold', 'Iron', 'Diamond', 'Platinum'],
          correctAnswer: 'Diamond',
        },
        {
          id: 8,
          type: 'boolean',
          question: 'The sun is a star.',
          choices: ['True', 'False'],
          correctAnswer: 'True',
        },
        {
          id: 9,
          type: 'single',
          question: 'Which planet is known as the Red Planet?',
          choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
          correctAnswer: 'Mars',
        },
        {
          id: 10,
          type: 'multiple',
          question: 'Which of these animals are mammals?',
          choices: ['Shark', 'Elephant', 'Dolphin', 'Penguin'],
          correctAnswers: ['Elephant', 'Dolphin'],
        },
      ],
    },
    2: {
      id: 2,
      title: 'Science',
      questions: [
        {
          id: 1,
          type: 'boolean',
          question: 'The Earth is flat.',
          choices: ['True', 'False'],
          correctAnswer: 'False',
        },
        {
          id: 2,
          type: 'single',
          question: 'What is the chemical symbol for water?',
          choices: ['H2O', 'CO2', 'NaCl', 'O2'],
          correctAnswer: 'H2O',
        },
        {
          id: 3,
          type: 'single',
          question: 'What is the boiling point of water?',
          choices: ['90°C', '100°C', '110°C', '120°C'],
          correctAnswer: '100°C',
        },
        {
          id: 4,
          type: 'multiple',
          question: 'Which of these are elements?',
          choices: ['Oxygen', 'Carbon', 'Salt', 'Water'],
          correctAnswers: ['Oxygen', 'Carbon'],
        },
        {
          id: 5,
          type: 'boolean',
          question: 'Humans have more than 5 senses.',
          choices: ['True', 'False'],
          correctAnswer: 'True',
        },
        {
          id: 6,
          type: 'single',
          question: 'Which planet is closest to the sun?',
          choices: ['Earth', 'Venus', 'Mercury', 'Mars'],
          correctAnswer: 'Mercury',
        },
        {
          id: 7,
          type: 'boolean',
          question: 'Sound travels faster in water than in air.',
          choices: ['True', 'False'],
          correctAnswer: 'True',
        },
        {
          id: 8,
          type: 'single',
          question: 'What is the most abundant gas in the Earth’s atmosphere?',
          choices: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
          correctAnswer: 'Nitrogen',
        },
        {
          id: 9,
          type: 'multiple',
          question: 'Which of these are renewable energy sources?',
          choices: ['Solar', 'Coal', 'Wind', 'Natural Gas'],
          correctAnswers: ['Solar', 'Wind'],
        },
        {
          id: 10,
          type: 'single',
          question: 'What is the chemical formula for table salt?',
          choices: ['NaCl', 'HCl', 'KCl', 'LiCl'],
          correctAnswer: 'NaCl',
        },
      ],
    },
  };
  
  export const getQuizzes = () => {
    return Object.values(quizzes).map(({ id, title }) => ({ id, title }));
  };
  
  export const getQuizQuestions = (quizId) => {
    return new Promise((resolve, reject) => {
      // Simulate an API call with a setTimeout
      setTimeout(() => {
        const quiz = quizzes[quizId];
        if (quiz) {
          resolve(quiz.questions);
        } else {
          reject(new Error('Quiz not found'));
        }
      }, 500); // 500ms delay to simulate network request
    });
  };
  