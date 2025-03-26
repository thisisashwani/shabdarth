import React, { useEffect } from 'react';
import { useGameContext } from '../contexts/GameContext';
import { useAudioContext } from '../contexts/AudioContext';
import { motion } from 'framer-motion';

const LandingPage = () => {
    const { goToScene } = useGameContext();
    const { playBackgroundMusic } = useAudioContext();
    
    // Start background music when landing page loads
    useEffect(() => {
        playBackgroundMusic();
    }, [playBackgroundMusic]);
  
    return (
        <div className="landing-page">
            <motion.div 
                className="forest-gate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <h1>Forest of Longing</h1>
                <p className="subtitle">शब्द के इस वन में, हर पथ एक भूली याद तक ले जाता है</p>
                
                <motion.button
                className="cta-button"
                onClick={() => goToScene(1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                    Begin Your Journey
                </motion.button>
            </motion.div>
        </div>
    );
};

export default LandingPage;
