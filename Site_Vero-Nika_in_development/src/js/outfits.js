// Получаем все изображения в галерее
const myself = document.querySelectorAll('.myself');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const closeBtn = document.querySelector('.close');

let currentIndex = 0; // Индекс текущего изображения

// Открыть модальное окно при клике на изображение
myself.forEach((image, index) => {
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
  currentIndex = (currentIndex + 1) % myself.length; // Переходим к следующему изображению
  modalImg.src = myself[currentIndex].src; // Обновляем изображение в модальном окне
});

// Переход к предыдущему изображению
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + myself.length) % myself.length; // Переходим к предыдущему изображению
  modalImg.src = myself[currentIndex].src; // Обновляем изображение в модальном окне
});

// Закрытие модального окна при клике на область вне изображения
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    
    // Разрешаем прокрутку страницы
    document.body.style.overflow = 'auto';
  }
});





// Создаем новый IntersectionObserver
const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Если элемент видим, добавляем анимацию динамически
      entry.target.style.animation = 'slidein2 3s 0.9s forwards';  // Запускаем анимацию
      entry.target.style.visibility = 'visible';  // Делаем элемент видимым

      // Останавливаем наблюдение за этим элементом после активации
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // Срабатывает, когда хотя бы 10% элемента становится видимым
});

// Находим все элементы, которые должны анимироваться
const elementsToAnimate = document.querySelectorAll('.myself__tale2 p');

// Начинаем наблюдение за каждым элементом
elementsToAnimate.forEach(element => {
  scrollObserver.observe(element);
});
