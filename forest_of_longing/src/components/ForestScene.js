import React from 'react';
import { motion } from 'framer-motion';
import { useSceneAudio } from '../hooks/useAudio';

const ForestScene = ({ 
    sceneIndex, 
    backgroundImage, 
    children, 
    onContinue 
}) => {
    // Set up audio for this scene
    useSceneAudio(sceneIndex);
  
    return (
        <div 
            className="forest-scene"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <motion.div
                className="scene-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                {children}
            </motion.div>
            
            {onContinue && (
                <motion.div 
                className="continue-prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                >
                    <p>Tap anywhere to continue</p>
                </motion.div>
            )}
        </div>
    );
};

export default ForestScene;
