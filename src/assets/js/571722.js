(function() {
  const init = () => {
    const yearSpans = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearSpans.forEach(span => {
      span.textContent = currentYear;
    });
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();