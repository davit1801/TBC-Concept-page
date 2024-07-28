// active header dropdown
const header = document.querySelector('.header');
const headerNavItems = document.querySelectorAll('.header-nav-item');
const dropdownBg = document.querySelector('.header-dropdown-bg');

headerNavItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    item.classList.toggle('show-list');
    headerNavItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('show-list');
      }
    });

    if (checkShowList()) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });
});

function checkShowList() {
  return Array.from(headerNavItems).some((item) =>
    item.classList.contains('show-list')
  );
}

//Clsoe dropdown on Click outside header navigation
const headerNav = document.querySelector('.header-nav-items');
document.addEventListener('click', (event) => {
  if (!headerNav.contains(event.target)) {
    headerNavItems.forEach((item) => {
      item.classList.remove('show-list');
      header.classList.remove('active');
    });
  }
});

//Header Mobile Navigation
const mobNavItems = document.querySelectorAll('.mob-nav-item');
mobNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('show-nav');
    mobNavItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('show-nav');
      }
    });
  });
});

const headerButton = document.querySelector('.mob-header-btn');
headerButton.addEventListener('click', () => {
  header.classList.toggle('open-mob-nav');
});

// Footer accordion
const footerDropdownToggles = document.querySelectorAll(
  '.footer-dropdown-toggle'
);
footerDropdownToggles.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('show-nav');
    footerDropdownToggles.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('show-nav');
      }
    });
  });
});

/////////////////////////////////////////////
// Menu Button
const menuBtn = document.querySelector('.menu-button');
const menuTriggerButton = document.querySelector('.menu-trigger-btn');

menuTriggerButton.addEventListener('click', () => {
  menuTriggerButton.classList.toggle('active');
  if (menuTriggerButton.classList.contains('active')) {
    menuBtn.classList.add('active');
  } else {
    menuBtn.classList.remove('active');
  }
});

//////////////////
// Swipper

function swiperSlider(sliderName, scrollbar, nextEl, prevEl) {
  new Swiper(`.${sliderName}`, {
    spaceBetween: 30,
    slidesPerView: 3,
    speed: 800,
    grabCursor: !0,
    updateOnWindowResize: !0,
    watchOverflow: !0,
    scrollbar: {
      el: `.${scrollbar}`,
      draggable: !0,
      hide: !1,
      dragSize: 300,
      snapOnRelease: !1,
    },
    navigation: {
      nextEl: `.${nextEl}`,
      prevEl: `.${prevEl}`,
    },
    breakpoints: {
      0: {
        spaceBetween: 15,
        slidesPerView: 1.213,
        scrollbar: {
          dragSize: 137,
        },
      },
      600: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2.523,
        spaceBetween: 30,
        scrollbar: {
          dragSize: 300,
        },
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        scrollbar: {
          dragSize: 300,
        },
      },
    },
  });
}

swiperSlider(
  'awards-swiper',
  'awards-slider-scrollbar',
  'awards-slider-next',
  'awards-slider-prev'
);
swiperSlider(
  'offers-swiper',
  'offers-slider-scrollbar',
  'offers-slider-next',
  'offers-slider-prev'
);
swiperSlider(
  'products-swiper',
  'products-slider-scrollbar',
  'products-slider-next',
  'products-slider-prev'
);
