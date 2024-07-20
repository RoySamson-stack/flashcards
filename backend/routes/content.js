const express = require('express');
const { checkAuth } = require('../middleware/auth');
const { Quiz, Flashcard } = require('../models/Content');
const router = express.Router();

// Quizzes
router.get('/quizzes', checkAuth, async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching quizzes' });
  }
});

router.post('/quizzes', checkAuth, async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ error: 'Error creating quiz' });
  }
});

router.put('/quizzes/:id', checkAuth, async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: 'Error updating quiz' });
  }
});

router.delete('/quizzes/:id', checkAuth, async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);
    res.json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting quiz' });
  }
});

// Flashcards
router.get('/flashcards', checkAuth, async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching flashcards' });
  }
});

router.post('/flashcards', checkAuth, async (req, res) => {
  try {
    const flashcard = new Flashcard(req.body);
    await flashcard.save();
    res.status(201).json(flashcard);
  } catch (error) {
    res.status(500).json({ error: 'Error creating flashcard' });
  }
});

router.put('/flashcards/:id', checkAuth, async (req, res) => {
  try {
    const flashcard = await Flashcard.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(flashcard);
  } catch (error) {
    res.status(500).json({ error: 'Error updating flashcard' });
  }
});

router.delete('/flashcards/:id', checkAuth, async (req, res) => {
  try {
    await Flashcard.findByIdAndDelete(req.params.id);
    res.json({ message: 'Flashcard deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting flashcard' });
  }
});

module.exports = router;
