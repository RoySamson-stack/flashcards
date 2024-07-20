const mongoose = require('mongoose');

const answerOptionSchema = new mongoose.Schema({
  answerText: String,
  isCorrect: Boolean
});

const quizSchema = new mongoose.Schema({
  questionText: String,
  answerOptions: [answerOptionSchema]
});

const flashcardSchema = new mongoose.Schema({
  question: String,
  answer: String
});

const Quiz = mongoose.model('Quiz', quizSchema);
const Flashcard = mongoose.model('Flashcard', flashcardSchema);

module.exports = { Quiz, Flashcard };
