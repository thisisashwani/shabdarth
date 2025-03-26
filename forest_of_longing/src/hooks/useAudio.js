import { useEffect } from 'react';
import { useAudioContext } from '../contexts/AudioContext';
import { useGameContext } from '../contexts/GameContext';

export const useSceneAudio = (sceneIndex) => {
    const { playNarration, playBackgroundMusic } = useAudioContext();
    const { currentScene } = useGameContext();
  
    useEffect(() => {
        // Play scene narration when this scene becomes active
        if (currentScene === sceneIndex) {
            // Ensure background music is playing
            playBackgroundMusic();
            
            // Play the narration for this scene
            if (sceneIndex > 0) { // Don't play narration on landing page
                playNarration(sceneIndex);
            }
        }
    }, [currentScene, sceneIndex, playNarration, playBackgroundMusic]);
};
