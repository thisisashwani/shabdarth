export const saveProgress = (progress) => {
    try {
        localStorage.setItem('shabdarth-progress', JSON.stringify(progress));
    } catch (error) {
        console.error('Error saving progress:', error);
    }
};
  
export const loadProgress = () => {
    try {
        const savedProgress = localStorage.getItem('shabdarth-progress');
        return savedProgress ? JSON.parse(savedProgress) : null;
    } catch (error) {
        console.error('Error loading progress:', error);
        return null;
    }
};
