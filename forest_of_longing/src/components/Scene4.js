import React, { useState } from 'react';
import ForestScene from './ForestScene';
import WordCard from './WordCard';
import { useGameContext } from '../contexts/GameContext';
import { narrations } from '../data/narrations';

const Scene4 = () => {
  const { goToScene, words, unlockWord } = useGameContext();
  const [showWordCard, setShowWordCard] = useState(false);
  
  // Get the word data for this scene
  const sceneWord = words.find(word => word.id === "zulfon");
  
  const handleInteraction = () => {
    // Show the word card when user interacts with the scene
    setShowWordCard(true);
    
    // Mark the word as unlocked
    unlockWord("zulfon");
  };
  
  const handleWordCardClose = () => {
    // Hide the word card
    setShowWordCard(false);
    
    // Move to the next scene
    goToScene(5);
  };
  
  return (
    <ForestScene
      sceneIndex={4}
      backgroundImage="/assets/images/tree-vines.webp"
    >
      <div className="scene-narration">
        <p>{narrations.scene4}</p>
      </div>
      
      {!showWordCard && (
        <div 
          className="scene-interactive-area"
          onClick={handleInteraction}
        >
          <div className="swaying-vines">
            {/* The vines would be animated with CSS/Three.js */}
            <p className="interaction-hint">Touch the flowing tresses</p>
          </div>
        </div>
      )}
      
      {showWordCard && (
        <WordCard word={sceneWord} onClose={handleWordCardClose} />
      )}
    </ForestScene>
  );
};

export default Scene4;
