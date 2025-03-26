function goToScene(sceneId) {
  const scenes = document.querySelectorAll('.scene');
  scenes.forEach(scene => {
    scene.classList.add('hidden');
    scene.classList.remove('active');
  });

  const activeScene = document.getElementById(sceneId);
  if (activeScene) {
    activeScene.classList.remove('hidden');
    activeScene.classList.add('active');
  }

  // Play background music only after user interacts
  const music = document.getElementById('bg-music');
  if (music && music.paused) {
    music.volume = 0.5;
    music.play().catch(err => {
      console.warn("User gesture not detected yet:", err);
    });
  }
}

// Ensure scene1 is visible on initial load
window.addEventListener('DOMContentLoaded', () => {
  goToScene('scene1');
});
