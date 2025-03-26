import React from 'react';
import { motion } from 'framer-motion';
import { useAudioContext } from '../contexts/AudioContext';

const WordCard = ({ word, onClose }) => {
  const { playWordSound } = useAudioContext();
  
  // Play word sound when card appears
  React.useEffect(() => {
    playWordSound(word.id);
  }, [playWordSound, word.id]);
  
  return (
    <motion.div 
      className="word-card"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-header">
        <h2>{word.word}</h2>
        <button className="sound-button" onClick={() => playWordSound(word.id)}>
          🔊
        </button>
      </div>
      
      <div className="card-content">
        <p className="meaning">{word.meaning}</p>
        <p className="origin"><strong>Origin:</strong> {word.origin}</p>
        <p className="song-line">"{word.songLine}"</p>
      </div>
      
      <div className="card-footer">
        <div className="relic-preview">
          <img src={word.relicImage} alt={word.visualRelic} />
          <p>{word.visualRelic}</p>
        </div>
        
        <motion.button
          className="collect-button"
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add to Collection
        </motion.button>
      </div>
    </motion.div>
  );
};

export default WordCard;
