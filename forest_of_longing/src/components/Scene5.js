import React, { useState } from 'react';
import ForestScene from './ForestScene';
import WordCard from './WordCard';
import { useGameContext } from '../contexts/GameContext';
import { narrations } from '../data/narrations';

const Scene5 = () => {
  const { goToScene, words, unlockWord } = useGameContext();
  const [showWordCard, setShowWordCard] = useState(false);
  
  // Get the word data for this scene
  const sceneWord = words.find(word => word.id === "maykashi");
  
  const handleInteraction = () => {
    // Show the word card when user interacts with the scene
    setShowWordCard(true);
    
    // Mark the word as unlocked
    unlockWord("maykashi");
  };
  
  const handleWordCardClose = () => {
    // Hide the word card
    setShowWordCard(false);
    
    // Move to the reward screen
    goToScene(6);
  };
  
  return (
    <ForestScene
      sceneIndex={5}
      backgroundImage="/assets/images/chalice.webp"
    >
      <div className="scene-narration">
        <p>{narrations.scene5}</p>
      </div>
      
      {!showWordCard && (
        <div 
          className="scene-interactive-area"
          onClick={handleInteraction}
        >
          <div className="glowing-chalice">
            {/* The chalice would be animated with CSS/Three.js glow effects */}
            <p className="interaction-hint">Touch the chalice</p>
          </div>
        </div>
      )}
      
      {showWordCard && (
        <WordCard word={sceneWord} onClose={handleWordCardClose} />
      )}
    </ForestScene>
  );
};

export default Scene5;
