// Electron Shells - Interactive Actions
document.addEventListener('DOMContentLoaded', function() {
  // Back button navigation
  const backBtn = document.querySelector('.back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'atom-science.html';
    });
  }

  // Logo navigation
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'atom-science.html';
    });
  }

  // Interactive code boxes - copy to clipboard
  const codeBoxes = document.querySelectorAll('.code-box');
  codeBoxes.forEach(box => {
    box.style.cursor = 'pointer';
    box.title = 'Click to copy';
    
    box.addEventListener('click', function() {
      const text = this.innerText;
      navigator.clipboard.writeText(text).then(() => {
        const originalBg = this.style.background;
        this.style.background = 'rgba(124, 58, 237, 0.3)';
        this.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
          this.style.background = originalBg;
        }, 500);
      });
    });
  });

  // Add hover effects to sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.addEventListener('mouseenter', function() {
      this.style.borderColor = '#33d8ff';
      this.style.boxShadow = '0 8px 20px rgba(51, 216, 255, 0.2)';
      this.style.transition = 'all 0.3s ease';
    });
    
    section.addEventListener('mouseleave', function() {
      this.style.borderColor = 'rgba(51, 216, 255, 0.2)';
      this.style.boxShadow = 'none';
    });
  });
});
