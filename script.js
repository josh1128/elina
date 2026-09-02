const pages = [...document.querySelectorAll('.page')];
const closedBook = document.getElementById('closedBook');
const bookView = document.getElementById('bookView');
const openBook = document.getElementById('openBook');
const closeBook = document.getElementById('closeBook');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const counter = document.getElementById('counter');
const progressBar = document.getElementById('progressBar');
const surprise = document.getElementById('surprise');
const surpriseButton = document.getElementById('surpriseButton');
const closeSurprise = document.getElementById('closeSurprise');

let current = 0;
let touchStartX = 0;

function render(direction = 0) {
  pages.forEach((page, index) => {
    page.classList.remove('active', 'leaving-left');
    if (index === current) page.classList.add('active');
    if (direction < 0 && index === current + 1) page.classList.add('leaving-left');
  });

  counter.textContent = `${current + 1} / ${pages.length}`;
  progressBar.style.width = `${((current + 1) / pages.length) * 100}%`;
  previous.disabled = current === 0;
  next.disabled = current === pages.length - 1;
}

function goNext() {
  if (current < pages.length - 1) {
    current += 1;
    render(1);
  }
}

function goPrevious() {
  if (current > 0) {
    current -= 1;
    render(-1);
  }
}

openBook.addEventListener('click', () => {
  closedBook.hidden = true;
  bookView.hidden = false;
  current = 0;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

closeBook.addEventListener('click', () => {
  bookView.hidden = true;
  closedBook.hidden = false;
  current = 0;
  render();
});

next.addEventListener('click', goNext);
previous.addEventListener('click', goPrevious);

window.addEventListener('keydown', (event) => {
  if (bookView.hidden) return;
  if (event.key === 'ArrowRight') goNext();
  if (event.key === 'ArrowLeft') goPrevious();
  if (event.key === 'Escape') {
    if (!surprise.hidden) surprise.hidden = true;
    else closeBook.click();
  }
});

bookView.addEventListener('touchstart', (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

bookView.addEventListener('touchend', (event) => {
  const delta = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(delta) < 45) return;
  if (delta < 0) goNext();
  else goPrevious();
}, { passive: true });

surpriseButton.addEventListener('click', () => {
  surprise.hidden = false;
});

closeSurprise.addEventListener('click', () => {
  surprise.hidden = true;
});

surprise.addEventListener('click', (event) => {
  if (event.target === surprise) surprise.hidden = true;
});

render();
