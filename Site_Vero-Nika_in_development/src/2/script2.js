// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM загружен и готов!');

  // Проверяем, существует ли контейнер .fake-masonry2 через jQuery
  var skin = $(".fake-masonry2");
  if (skin.length > 0) {
    console.log("Контейнер найден");
    // Вызов функции после проверки наличия контейнера
    placeImagesInColumns(); // Этот вызов теперь будет работать, потому что функция объявлена
  } else {
    console.log("Контейнер не найден");
  }

  // Функция для распределения изображений по колонкам
  function placeImagesInColumns() {
    const skin = document.querySelector('.fake-masonry');
    if (!skin) return;

    // Колонки, куда будем размещать фотографии
    const columns = [[], [], []];
    const imagesPerColumn = 8; // Количество изображений в колонке

    // Получаем все изображения из контейнера
    const images = document.querySelectorAll('.content__slider');

    // Переменные для отслеживания
    let currentColumnIndex = 0; // Начинаем с первой колонки
    let imageCount = 0; // Счётчик изображений

    // Перебор всех изображений
    images.forEach((image, index) => {
      const clonedImage = image.cloneNode(true); // Клонируем изображение
      columns[currentColumnIndex].push(clonedImage); // Добавляем в колонку

      // Вставляем клонированное изображение в контейнер
      skin.appendChild(clonedImage);

      imageCount++;

      // После 8 изображений в колонке переключаемся на следующую колонку
      if (imageCount === imagesPerColumn) {
        currentColumnIndex = (currentColumnIndex + 1) % 3; // Переключаем на следующую колонку
        imageCount = 0; // Сбрасываем счётчик
      }
    });
  }

  // Функция для клонирования изображения при его появлении
  function cloneImage(image) {
    const clonedImage = image.cloneNode(true); // Клонируем изображение
    image.parentElement.appendChild(clonedImage); // Добавляем клонированное изображение в контейнер
  }

  // Функция для отслеживания появления изображения
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Как только изображение появляется на экране, клонируем его
        cloneImage(entry.target);
      }
    });
  }

  // Создаем наблюдатель для отслеживания изображений
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Отслеживаем в пределах всего окна
    rootMargin: '100px', // Когда элемент будет виден на экране (в пределах 100px)
    threshold: 0.5, // Изображение должно быть видно хотя бы на 50%
  });

  // Получаем все изображения для наблюдения
  const skins = document.querySelectorAll('.content__foto2');
  skins.forEach(skin => {
    const images = skin.querySelectorAll('.content__slider');
    images.forEach(image => observer.observe(image)); // Отслеживаем каждое изображение
  });

  // Код для второго контейнера с изображениями (если нужен второй блок .fake-masonry2)
  const skinSecond = document.querySelector('.fake-masonry2');
  const imagesSecond = document.querySelectorAll('.content__slider');

  // Создаем наблюдатель для клонирования изображений при появлении
  const observerSecond = new IntersectionObserver(handleIntersection, {
    root: skinSecond, // Отслеживаем внутри .fake-masonry2
    rootMargin: '100px', // Когда элемент будет виден на экране
    threshold: 0.5, // Изображение должно быть видно хотя бы на 50%
  });

  imagesSecond.forEach(image => observerSecond.observe(image)); // Наблюдаем за изображениями
});
