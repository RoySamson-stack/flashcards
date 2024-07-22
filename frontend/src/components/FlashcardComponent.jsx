import React, { useState } from 'react';

const FlashcardComponent = ({ flashcards }) => {
  const [currentCard, setCurrentCard] = useState(0);

  if (!flashcards || flashcards.length === 0) {
    return <div>No flashcards available</div>;
  }

  const handleNextCard = () => {
    const nextCard = currentCard + 1;
    if (nextCard < flashcards.length) {
      setCurrentCard(nextCard);
    } else {
      setCurrentCard(0); 
    }
  };

  return (
    <div>
      <div>
        <h2>Flashcard</h2>
        <div>{flashcards[currentCard].question}</div>
        <div>{flashcards[currentCard].answer}</div>
        <button onClick={handleNextCard}>Next Card</button>
      </div>
    </div>
  );
};

export default FlashcardComponent;
