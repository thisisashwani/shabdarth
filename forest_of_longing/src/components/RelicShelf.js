import React from 'react';
import { motion } from 'framer-motion';

const RelicShelf = ({ words }) => {
  // Filter to get only unlocked words
  const unlockedWords = words.filter(word => word.unlocked);
  
  return (
    <div className="relic-shelf">
      <h3>Your Collection</h3>
      
      <div className="relics-container">
        {unlockedWords.map((word, index) => (
          <motion.div
            key={word.id}
            className="relic-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
          >
            <img src={word.relicImage} alt={word.visualRelic} />
            <p className="relic-name">{word.word}</p>
          </motion.div>
        ))}
        
        {/* Empty slots for not-yet-collected relics */}
        {Array.from({ length: Math.max(0, 4 - unlockedWords.length) }).map((_, index) => (
          <div 
            key={`empty-${index}`}
            className="relic-item empty"
          >
            <div className="empty-placeholder">?</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelicShelf;
