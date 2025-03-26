import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useGameContext } from '../contexts/GameContext';
import RelicShelf from './RelicShelf';

const RewardScreen = () => {
  const { words, resetProgress } = useGameContext();
  const [showFamilyWordInput, setShowFamilyWordInput] = useState(false);
  const [familyWord, setFamilyWord] = useState('');
  const [familyMemory, setFamilyMemory] = useState('');
  
  const handleFamilyWordSubmit = (e) => {
    e.preventDefault();
    // Here you would add the bonus relic using addBonusRelic from context
    // For now, we'll just clear the form
    setFamilyWord('');
    setFamilyMemory('');
    setShowFamilyWordInput(false);
    
    // Show a thank you message
    alert('Thank you for sharing this memory! It has been added to your collection.');
  };
  
  return (
    <div className="reward-screen">
      <motion.div
        className="reward-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Journey Complete</h2>
        <p className="completion-text">
          You have unlocked all the forgotten words in the Forest of Longing.
          Each word carries a piece of memory, a fragment of emotion that was once lost.
        </p>
        
        <RelicShelf words={words} />
        
        <div className="reward-actions">
          {!showFamilyWordInput ? (
            <motion.button
              className="family-word-button"
              onClick={() => setShowFamilyWordInput(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Share a Family Word
            </motion.button>
          ) : (
            <motion.form
              className="family-word-form"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              onSubmit={handleFamilyWordSubmit}
            >
              <h3>Share a Word from Your Family</h3>
              <p>Ask an elder in your family about a word they remember from their childhood.</p>
              
              <div className="form-group">
                <label htmlFor="familyWord">Family Word:</label>
                <input
                  type="text"
                  id="familyWord"
                  value={familyWord}
                  onChange={(e) => setFamilyWord(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="familyMemory">Memory or Story:</label>
                <textarea
                  id="familyMemory"
                  value={familyMemory}
                  onChange={(e) => setFamilyMemory(e.target.value)}
                  rows={4}
                  required
                ></textarea>
              </div>
              
              <div className="form-actions">
                <button type="submit" className="submit-button">
                  Share Memory
                </button>
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={() => setShowFamilyWordInput(false)}
                >
                  Cancel
                </button>
              </div>
            </motion.form>
          )}
          
          <div className="navigation-buttons">
            <motion.button
              className="visit-another-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // In a full implementation, this would navigate to a world selection screen
              onClick={() => alert('More dream worlds coming soon!')}
            >
              Visit Another Forest
            </motion.button>
            
            <motion.button
              className="return-home-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetProgress}
            >
              Return Home
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RewardScreen;
