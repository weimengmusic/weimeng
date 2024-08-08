// main.js
document.addEventListener('DOMContentLoaded', function() {
    // 切換顯示/隱藏內容
    const toggleButton = document.getElementById('toggleButton');
    const toggleContent = document.getElementById('toggleContent');
  
    toggleButton.addEventListener('click', function() {
      if (toggleContent.classList.contains('hidden')) {
        toggleContent.classList.remove('hidden');
        toggleContent.classList.add('toggleContent');
      } else {
        toggleContent.classList.add('hidden');
      }
    });
  });
  