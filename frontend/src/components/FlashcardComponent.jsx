import React, { useState } from 'react';

const FlashcardComponent = ({ flashcards }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNextCard = () => {
    const nextCard = currentCard + 1;
    if (nextCard < flashcards.length) {
      setCurrentCard(nextCard);
    } else {
      setCurrentCard(0); // Loop back to the first card
    }
  };

  return (
    <div>
      <div>{flashcards[currentCard].question}</div>
      <div>{flashcards[currentCard].answer}</div>
      <button onClick={handleNextCard}>Next Card</button>
    </div>
  );
};

export default FlashcardComponent;
