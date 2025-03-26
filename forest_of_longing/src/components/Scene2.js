// src/components/Scene2.js - Bekhudi Scene
import React, { useState } from 'react';
import ForestScene from './ForestScene';
import WordCard from './WordCard';
import { useGameContext } from '../contexts/GameContext';
import { narrations } from '../data/narrations';

const Scene2 = () => {
  const { goToScene, words, unlockWord } = useGameContext();
  const [showWordCard, setShowWordCard] = useState(false);
  
  // Get the word data for this scene
  const sceneWord = words.find(word => word.id === "bekhudi");
  
  const handleSwingClick = () => {
    // Show the word card when user interacts with the swing
    setShowWordCard(true);
    
    // Mark the word as unlocked
    unlockWord("bekhudi");
  };
  
  const handleWordCardClose = () => {
    // Hide the word card
    setShowWordCard(false);
    
    // Move to the next scene
    goToScene(3);
  };
  
  return (
    <ForestScene
      sceneIndex={2}
      backgroundImage="/assets/images/swing.webp"
    >
      <div className="scene-narration">
        <p>{narrations.scene2}</p>
      </div>
      
      {!showWordCard && (
        <div className="scene-interactive-area">
          <div 
            className="floating-swing"
            onClick={handleSwingClick}
          >
            {/* The swing would be animated with CSS/Three.js */}
            <div className="swing-object"></div>
            <p className="interaction-hint">Tap the swing</p>
          </div>
        </div>
      )}
      
      {showWordCard && (
        <WordCard word={sceneWord} onClose={handleWordCardClose} />
      )}
    </ForestScene>
  );
};

export default Scene2;
