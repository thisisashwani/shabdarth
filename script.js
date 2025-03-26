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
}

// Ensure scene1 is visible on initial load
window.addEventListener('DOMContentLoaded', () => {
  goToScene('scene1');
});
