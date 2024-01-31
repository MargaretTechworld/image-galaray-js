const scrollContainer = document.querySelector('.gallery');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

backBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -scrollContainer.clientWidth,
    behavior: 'smooth',
  });
});

nextBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: scrollContainer.clientWidth,
    behavior: 'smooth',
  });
});

scrollContainer.addEventListener('wheel', (event) => {
  event.preventDefault();

  scrollContainer.scrollBy({
    left: event.deltaY > 0 ? 100 : -100,
    behavior: 'smooth',
  });
});