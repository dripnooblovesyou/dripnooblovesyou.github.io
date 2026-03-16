document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dais-dropdown');

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('toggle', () => {
      if (!dropdown.open) {
        return;
      }

      dropdowns.forEach((other) => {
        if (other !== dropdown) {
          other.open = false;
        }
      });
    });
  });
});
