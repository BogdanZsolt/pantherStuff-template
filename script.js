const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < triggerOpen.length; i++) {
  let currentId = triggerOpen[i].dataset.target,
    targetEl = document.querySelector(`#${currentId}`);

  const openData = function () {
    targetEl.classList.remove('active');
    overlay.classList.remove('active');
  };

  triggerOpen[i].addEventListener('click', function () {
    targetEl.classList.add('active');
    overlay.classList.add('active');
  });

  targetEl.querySelector('[close-button]').addEventListener('click', openData);
  overlay.addEventListener('click', openData);
}

// mobile-menu submenu
const submenu = document.querySelectorAll('.child-trigger');
submenu.forEach((menu) =>
  menu.addEventListener('click', (e) => {
    e.preventDefault();
    submenu.forEach((item) => {
      if (
        item.closest('.has-child').classList === 'active' &&
        item.closest('.has-child') !== e.target.closest('.has-child')
      ) {
        item.closest('.has-child').classList.remove('active');
      }
    });
    e.target.closest('.has-child').classList.toggle('active');
  })
);

// sorter
const sorter = document.querySelector('.sort-list');
if (sorter) {
  const sortList = sorter.querySelectorAll('li');
  sorter.querySelector('.opt-trigger').addEventListener('click', () => {
    sorter.querySelector('ul').classList.toggle('show');
  });

  sortList.forEach((item) =>
    item.addEventListener('click', (e) => {
      e.preventDefault();
      sortList.forEach((li) => li.classList.remove('active'));
      e.target.closest('li').classList.add('active');

      sorter.querySelector('.opt-trigger span.value').textContent =
        e.target.textContent;
      sorter.querySelector('ul').classList.toggle('show');
    })
  );
}

// Slider
const swiper = new Swiper('.sliderbox', {
  loop: true,
  // effect: 'fade',
  autoHeight: true,
  // autoplay: {
  //   delay: 5000,
  // },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// carousel
const carousel = new Swiper('.carouselbox', {
  spaceBetween: 30,
  slidePerView: 'auto',
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    481: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      centeredSlides: false,
    },
    640: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      centeredSlides: false,
    },
    992: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      centeredSlides: false,
    },
  },
});