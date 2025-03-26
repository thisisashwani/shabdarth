// src/components/Scene3.js - Fizaayein Scene
import React, { useState } from 'react';
import ForestScene from './ForestScene';
import WordCard from './WordCard';
import { useGameContext } from '../contexts/GameContext';
import { narrations } from '../data/narrations';

const Scene3 = () => {
  const { goToScene, words, unlockWord } = useGameContext();
  const [showWordCard, setShowWordCard] = useState(false);
  
  // Get the word data for this scene
  const sceneWord = words.find(word => word.id === "fizaayein");
  
  const handleInteraction = () => {
    // Show the word card when user interacts with the scene
    setShowWordCard(true);
    
    // Mark the word as unlocked
    unlockWord("fizaayein");
  };
  
  const handleWordCardClose = () => {
    // Hide the word card
    setShowWordCard(false);
    
    // Move to the next scene
    goToScene(4);
  };
  
  return (
    <ForestScene
      sceneIndex={3}
      backgroundImage="/assets/images/glade.webp"
    >
      <div className="scene-narration">
        <p>{narrations.scene3}</p>
      </div>
      
      {!showWordCard && (
        <div 
          className="scene-interactive-area"
          onClick={handleInteraction}
        >
          <div className="flowing-petals">
            {/* The petals would be animated with particles/Three.js */}
            <p className="interaction-hint">Touch the breeze</p>
          </div>
        </div>
      )}
      
      {showWordCard && (
        <WordCard word={sceneWord} onClose={handleWordCardClose} />
      )}
    </ForestScene>
  );
};

export default Scene3;
