gsap.registerPlugin(ScrollTrigger);

let isAnimating = false;
let observer = null;

// Находим контейнер для картинок
const container = document.querySelector('.masonry-container');
const images = document.querySelectorAll('.content__slider');
const lastImage = images[images.length - 1];

// Получаем высоту прокрутки и длительность анимации
let scrollDistance = container.scrollHeight - window.innerHeight;
let animationDuration = 5;

// Основная анимация движения вниз
function startMainAnimation() {
  gsap.to(container, {
    y: `-${scrollDistance}px`,
    duration: animationDuration,
    repeat: -1,
    ease: "none",
    yoyo: true,
  });
}

// Настройка под размер экрана
function getObserverOptions() {
  const width = window.innerWidth;

  if (width <= 600) {
    // Телефон
    return {
      threshold: [1],
      rootMargin: "0px 0px -60% 0px"
    };
  } else if (width <= 1024) {
    // Планшет
    return {
      threshold: [0.75],
      rootMargin: "0px 0px -50% 0px"
    };
  } else {
    // Компьютер
    return {
      threshold: [0.5],
      rootMargin: "0px 0px -40% 0px"
    };
  }
}

// Удаляем старый observer и создаём новый
function setupObserver() {
  if (observer) observer.disconnect();

  const options = getObserverOptions();

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isAnimating) {
        isAnimating = true;

        gsap.to(container, {
          y: 0,
          duration: animationDuration,
          ease: "none",
          onComplete: () => {
            startMainAnimation(); // Снова вниз
            isAnimating = false;
          }
        });
      }
    });
  }, options);

  observer.observe(lastImage);
}

// Обновляем прокрутку и observer при изменении экрана
function handleResize() {
  scrollDistance = container.scrollHeight - window.innerHeight;
  setupObserver();
}

// Старт
startMainAnimation();
setupObserver();

// Слушаем поворот экрана и ресайз
window.addEventListener('resize', () => {
  clearTimeout(window._resizeTimer);
  window._resizeTimer = setTimeout(handleResize, 200);
});
