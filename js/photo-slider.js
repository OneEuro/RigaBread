const galleryContainer = document.getElementById('gallery-container');
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('closeBtn');
const expandBtn = document.getElementById('expandBtn');
const pageIndicator = document.getElementById('page-indicator');

let touchStartX = 0;
let touchEndX = 0;

// Открыть модальное окно с увеличенной фотографией
function openModal(imgSrc) {
  modalImg.src = imgSrc;
  modal.style.display = 'flex';
}

// Закрыть модальное окно
function closeModal() {
  modal.style.display = 'none';
}

function expandPhoto() {
  const currentScrollPosition = gallery.scrollLeft;
  const currentIndex = Math.round(currentScrollPosition / galleryContainer.clientWidth);
  const activePhoto = gallery.children[currentIndex].querySelector('img');

  if (activePhoto) {
    openModal(activePhoto.src);
  }
}

// Обработка клика на фотографии в галерее
gallery.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'IMG') {
    openModal(target.src);
  }
});

// Обработка клика на кнопке закрытия модального окна
closeBtn.addEventListener('click', closeModal);

// Закрыть модальное окно при клике вне изображения
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Добавить индикатор страниц
const totalPhotos = gallery.children.length;
for (let i = 0; i < totalPhotos; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  pageIndicator.appendChild(dot);

  dot.addEventListener('click', () => {
    scrollToPhoto(i);
  });
}
updatePageIndicator();
// Обновить индикатор страниц при прокрутке галереи
gallery.addEventListener('scroll', updatePageIndicator);

function scrollToPhoto(index) {
  gallery.scrollTo({
    left: index * galleryContainer.clientWidth,
    behavior: 'smooth'
  });
}

function updatePageIndicator() {
  const currentPage = Math.round(gallery.scrollLeft / galleryContainer.clientWidth);
  const dots = pageIndicator.querySelectorAll('.dot');

  dots.forEach((dot, index) => {
    if (index === currentPage) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Обработка событий прикосновений для листания фотографий свайпом
gallery.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

gallery.addEventListener('touchmove', (event) => {
  touchEndX = event.touches[0].clientX;
});

gallery.addEventListener('touchend', () => {
  const deltaX = touchEndX - touchStartX;

  if (deltaX > 50) {
    // Свайп влево
    gallery.scrollBy({
      left: -gallery.clientWidth,
      behavior: 'smooth'
    });
  } else if (deltaX < -50) {
    // Свайп вправо
    gallery.scrollBy({
      left: gallery.clientWidth,
      behavior: 'smooth'
    });
  }
});