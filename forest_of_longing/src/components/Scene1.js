import React from 'react';
import ForestScene from './ForestScene';
import { useGameContext } from '../contexts/GameContext';
import { narrations } from '../data/narrations';

const Scene1 = () => {
  const { goToScene } = useGameContext();
  
  const handleContinue = () => {
    goToScene(2);
  };
  
  return (
    <ForestScene
      sceneIndex={1}
      backgroundImage="/assets/images/forest-path.webp"
      onContinue={handleContinue}
    >
      <div className="scene-narration">
        <p>{narrations.scene1}</p>
      </div>
      
      <div 
        className="scene-interactive-area"
        onClick={handleContinue}
      >
        {/* Floating poetry fragments animation would go here */}
        <div className="poetry-fragments">
          {/* These would be animated with CSS/Three.js */}
          <span className="fragment">बेख़ुदी</span>
          <span className="fragment">याद</span>
          <span className="fragment">ख़्वाब</span>
        </div>
      </div>
    </ForestScene>
  );
};

export default Scene1;
