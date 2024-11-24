// Получаем все изображения в галерее
const galleryImages = document.querySelectorAll('.gallery-img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const closeBtn = document.querySelector('.close');

let currentIndex = 0; // Индекс текущего изображения

// Открыть модальное окно при клике на изображение
galleryImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    modal.style.display = 'block'; // Показываем модальное окно
    modalImg.src = image.src; // Устанавливаем источник изображения в модальном окне
    currentIndex = index; // Запоминаем индекс текущего изображения
    
    // Блокируем прокрутку страницы
    document.body.style.overflow = 'hidden'; 
  });
});

// Закрыть модальное окно
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  
  // Разрешаем прокрутку страницы
  document.body.style.overflow = 'auto';
});

// Переход к следующему изображению
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length; // Переходим к следующему изображению
  modalImg.src = galleryImages[currentIndex].src; // Обновляем изображение в модальном окне
});

// Переход к предыдущему изображению
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length; // Переходим к предыдущему изображению
  modalImg.src = galleryImages[currentIndex].src; // Обновляем изображение в модальном окне
});

// Закрытие модального окна при клике на область вне изображения
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    
    // Разрешаем прокрутку страницы
    document.body.style.overflow = 'auto';
  }
});
