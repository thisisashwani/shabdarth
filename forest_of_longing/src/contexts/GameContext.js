import React, { createContext, useContext, useState, useEffect } from 'react';
import { wordData } from '../data/words';
import { saveProgress, loadProgress } from '../utils/storage';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  // Game state
  const [currentScene, setCurrentScene] = useState(0);
  const [words, setWords] = useState(wordData);
  const [completedScenes, setCompletedScenes] = useState([]);
  const [forestCompleted, setForestCompleted] = useState(false);
  const [bonusRelics, setBonusRelics] = useState([]);

  // Load saved progress on initial mount
  useEffect(() => {
    const savedProgress = loadProgress();
    if (savedProgress) {
      setCurrentScene(savedProgress.currentScene);
      setWords(savedProgress.words);
      setCompletedScenes(savedProgress.completedScenes);
      setForestCompleted(savedProgress.forestCompleted);
      setBonusRelics(savedProgress.bonusRelics);
    }
  }, []);

  // Save progress whenever state changes
  useEffect(() => {
    saveProgress({
      currentScene,
      words,
      completedScenes,
      forestCompleted,
      bonusRelics
    });
  }, [currentScene, words, completedScenes, forestCompleted, bonusRelics]);

  // Navigate to a specific scene
  const goToScene = (sceneIndex) => {
    setCurrentScene(sceneIndex);
  };

  // Unlock a word and its relic
  const unlockWord = (wordId) => {
    setWords(words.map(word => 
      word.id === wordId ? { ...word, unlocked: true } : word
    ));
    
    // Add to completed scenes
    if (!completedScenes.includes(currentScene)) {
      setCompletedScenes([...completedScenes, currentScene]);
    }
    
    // Check if all words are unlocked
    const allWordsUnlocked = words.every(word => 
      word.id === wordId ? true : word.unlocked
    );
    
    if (allWordsUnlocked) {
      setForestCompleted(true);
    }
  };

  // Add a bonus relic (from real-world engagement)
  const addBonusRelic = (relic) => {
    setBonusRelics([...bonusRelics, relic]);
  };

  // Reset progress for testing
  const resetProgress = () => {
    setCurrentScene(0);
    setWords(wordData.map(word => ({ ...word, unlocked: false })));
    setCompletedScenes([]);
    setForestCompleted(false);
    setBonusRelics([]);
  };

  return (
    <GameContext.Provider
      value={{
        currentScene,
        words,
        completedScenes,
        forestCompleted,
        bonusRelics,
        goToScene,
        unlockWord,
        addBonusRelic,
        resetProgress
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
