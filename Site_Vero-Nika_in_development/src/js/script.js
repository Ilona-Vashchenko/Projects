
document.addEventListener('DOMContentLoaded', function () {
  // Получаем контейнер, где будут размещены фотографии
  const containers = document.querySelectorAll('.content__foto');

  // Функция для клонирования изображения
  function cloneImage(image) {
    const clonedImage = image.cloneNode(true); // Клонируем изображение
    image.parentElement.appendChild(clonedImage); // Добавляем клонированное изображение в контейнер
  }

  // Функция для отслеживания появления изображения внизу
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Как только изображение появляется на экране, клонируем его
        cloneImage(entry.target);
      }
    });
  }

  // Создаем наблюдатель, чтобы отслеживать изображения
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Отслеживаем элементы в пределах всего окна
    rootMargin: '100px', // Когда элемент будет виден на экране (в пределах 100px)
    threshold: 0.5, // Изображение должно быть видно хотя бы на 50%
  });

  // Наблюдаем за всеми изображениями
  containers.forEach(container => {
    const images = container.querySelectorAll('.content__slider');
    images.forEach(image => observer.observe(image)); // Отслеживаем каждое изображение
  });
});








$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});




/*document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.content__foto img');
  
  let maxHeight = 0;

  // Находим максимальную высоту среди всех изображений
  images.forEach(image => {
    const imgHeight = image.clientHeight;
    if (imgHeight > maxHeight) {
      maxHeight = imgHeight;
    }
  });

  // Применяем максимальную высоту ко всем изображениям
  images.forEach(image => {
    image.style.height = `${maxHeight}px`;
  });
});*/






// Получаем контейнер и все изображения
const container = document.querySelector('.fake-masonry');
const images = document.querySelectorAll('.content__slider');

// Функция для клонирования изображения
function cloneImage(image) {
  const clonedImage = image.cloneNode(true); // Клонируем изображение
  container.appendChild(clonedImage); // Добавляем клонированное изображение в контейнер
}

// Функция для отслеживания появления изображения внизу
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Как только изображение появляется на экране, клонируем его
      cloneImage(entry.target);
    }
  });
}

// Создаем наблюдатель, чтобы отслеживать изображения
const observer = new IntersectionObserver(handleIntersection, {
  root: container, // Отслеживаем в пределах контейнера
  rootMargin: '1000px', // Когда элемент будет виден на экране
  threshold: 0.5, // Изображение должно быть видно хотя бы на 50%
});

// Наблюдаем за всеми изображениями
images.forEach(image => observer.observe(image));
