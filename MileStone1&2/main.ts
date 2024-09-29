
const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const toggleSection = document.getElementById('toggleSection') as HTMLDivElement;

toggleButton.addEventListener('click', () => {
  if (toggleSection.classList.contains('hidden')) {
    toggleSection.classList.remove('hidden');
  } else {
    toggleSection.classList.add('hidden');
  }
});

  

