import React from 'react';
import { GameProvider, useGameContext } from './contexts/GameContext';
import { AudioProvider } from './contexts/AudioContext';
import LandingPage from './components/LandingPage';
import Scene1 from './components/Scene1';
import Scene2 from './components/Scene2';
import Scene3 from './components/Scene3';
import Scene4 from './components/Scene4';
import Scene5 from './components/Scene5';
import RewardScreen from './components/RewardScreen';
import AudioController from './components/AudioController';
import './styles/global.css';

// Scene renderer based on current scene index
const SceneRenderer = () => {
  const { currentScene } = useGameContext();
  
  switch (currentScene) {
    case 0:
      return <LandingPage />;
    case 1:
      return <Scene1 />;
    case 2:
      return <Scene2 />;
    case 3:
      return <Scene3 />;
    case 4:
      return <Scene4 />;
    case 5:
      return <Scene5 />;
    case 6:
      return <RewardScreen />;
    default:
      return <LandingPage />;
  }
};

// Main App wrapper
const App = () => {
  return (
    <GameProvider>
      <AudioProvider>
        <div className="shabdarth-app">
          <SceneRenderer />
          <AudioController />
        </div>
      </AudioProvider>
    </GameProvider>
  );
};

export default App;
