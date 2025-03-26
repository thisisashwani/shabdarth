import React from 'react';
import { useAudioContext } from '../contexts/AudioContext';

const AudioController = () => {
    const { isMuted, toggleMute } = useAudioContext();
    
    return (
        <button 
        className="audio-control"
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
        {isMuted ? '🔇' : '🔊'}
        </button>
    );
};

export default AudioController;
