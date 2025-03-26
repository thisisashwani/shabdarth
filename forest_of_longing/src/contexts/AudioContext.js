import React, { createContext, useContext, useRef, useState } from 'react';
import { Howl } from 'howler';
import { wordData } from '../data/words';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const [isMuted, setIsMuted] = useState(false);
    const [narrationPlaying, setNarrationPlaying] = useState(false);
  
    // References to audio instances
    const backgroundMusic = useRef(null);
    const currentNarration = useRef(null);
    const wordSounds = useRef({});
  
    // Initialize background music
    const initBackgroundMusic = () => {
        if (!backgroundMusic.current) {
            backgroundMusic.current = new Howl({
                src: ['/assets/audio/background.mp3'],
                loop: true,
                volume: 0.4,
                autoplay: false
            });
        }
    };
  
    // Play background music
    const playBackgroundMusic = () => {
        if (!backgroundMusic.current) {
            initBackgroundMusic();
        }
        
        if (!isMuted && !backgroundMusic.current.playing()) {
            backgroundMusic.current.play();
        }
    };
    
    // Pause background music
    const pauseBackgroundMusic = () => {
        if (backgroundMusic.current && backgroundMusic.current.playing()) {
            backgroundMusic.current.pause();
        }
    };
    
    // Play narration for a scene
    const playNarration = (sceneIndex) => {
        // Stop any current narration
        if (currentNarration.current && currentNarration.current.playing()) {
            currentNarration.current.stop();
        }
        
        // Lower background music volume during narration
        if (backgroundMusic.current) {
            backgroundMusic.current.volume(0.1);
        }
        
        // Create and play new narration
        currentNarration.current = new Howl({
            src: [`/assets/audio/narration-scene${sceneIndex}.mp3`],
            volume: 1.0,
            autoplay: !isMuted,
            onplay: () => setNarrationPlaying(true),
            onend: () => {
                setNarrationPlaying(false);
                // Restore background music volume
                if (backgroundMusic.current) {
                backgroundMusic.current.volume(0.4);
                }
            }
        });
    };
    
    // Play word sound
    const playWordSound = (wordId) => {
        if (isMuted) return;
        
        // Create word sound if not already created
        if (!wordSounds.current[wordId]) {
            const word = wordData.find(w => w.id === wordId);
            if (word) {
                wordSounds.current[wordId] = new Howl({
                src: [word.soundClip],
                volume: 1.0
                });
            }
        }
        
        // Play the word sound
        if (wordSounds.current[wordId]) {
            wordSounds.current[wordId].play();
        }
    };
    
    // Toggle mute state
    const toggleMute = () => {
        setIsMuted(!isMuted);
        
        if (!isMuted) {
            // Mute all sounds
            if (backgroundMusic.current) {
                backgroundMusic.current.mute(true);
            }
            if (currentNarration.current) {
                currentNarration.current.mute(true);
            }
            Object.values(wordSounds.current).forEach(sound => {
                sound.mute(true);
            });
        } else {
            // Unmute all sounds
            if (backgroundMusic.current) {
                backgroundMusic.current.mute(false);
            }
            if (currentNarration.current) {
                currentNarration.current.mute(false);
            }
            Object.values(wordSounds.current).forEach(sound => {
                sound.mute(false);
            });
        }
    };
    
    return (
        <AudioContext.Provider
            value={{
                isMuted,
                narrationPlaying,
                playBackgroundMusic,
                pauseBackgroundMusic,
                playNarration,
                playWordSound,
                toggleMute
            }}
        >
            {children}
        </AudioContext.Provider>
    );
};

export const useAudioContext = () => useContext(AudioContext);
