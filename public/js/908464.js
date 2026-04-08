(function() {
  const init = () => {
    const buttons = document.querySelectorAll('.brand-hover-btn');
    buttons.forEach(btn => {
      const section = btn.closest('section');
      const brandColor = section ? section.style.backgroundColor : null;
      if (brandColor) {
        btn.addEventListener('mouseenter', function() {
          this.style.backgroundColor = brandColor;
          this.style.color = '#ffffff';
        });
        btn.addEventListener('mouseleave', function() {
          this.style.backgroundColor = '#ffffff';
          this.style.color = brandColor;
        });
      }
    });
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();