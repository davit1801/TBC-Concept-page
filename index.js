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

// const wrapper = document.querySelector('.swipper-container');

// let pressed = false;
// let startX = 0;

// wrapper.addEventListener('mousedown', (e) => {
//   pressed = true;
//   startX = e.clientX;
//   wrapper.style.cursor = 'grabbing';

//   console.log(startX);
// });

// wrapper.addEventListener('mouseleave', (e) => {
//   pressed = false;
// });

// window.addEventListener('mouseup', (e) => {
//   pressed = false;
//   wrapper.style.cursor = 'grab';
// });

// wrapper.addEventListener('mousemove', (e) => {
//   if (!pressed) {
//     return;
//   }
//   // wrapper.scrollLeft += startX - e.clientX
//   wrapper.style.transform = 'translate3d(-100px, 0px, 0px)';
// });

// const slider = document.querySelector('.awards-swipper');
// const buttonTest = document.querySelector('.test1');

// slider.addEventListener('mousedown', (e) => {
//   slider.addEventListener('mousemove', (e) => {
//     console.log(e.clientX);
//   });
//   // slider.style.transform = `translate(-${e.clientX}px, 0px)`;
// });

//////////////////
const awardsSwipper = new Swiper('.awards-swipper', {
  spaceBetween: 30,
  slidesPerView: 3,
  speed: 800,
  grabCursor: !0,
  updateOnWindowResize: !0,
  watchOverflow: !0,
  scrollbar: {
    el: '.awards-slider-scrollbar',
    draggable: !0,
    hide: !1,
    dragSize: 300,
    snapOnRelease: !1,
  },
  navigation: {
    nextEl: '.main-slider-next',
    prevEl: '.main-slider-prev',
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

const offersSwipper = new Swiper('.offers-swipper', {
  spaceBetween: 30,
  slidesPerView: 3,
  speed: 800,
  grabCursor: !0,
  updateOnWindowResize: !0,
  watchOverflow: !0,
  scrollbar: {
    el: '.offers-slider-scrollbar',
    draggable: !0,
    hide: !1,
    dragSize: 300,
    snapOnRelease: !1,
  },
  navigation: {
    nextEl: '.main-slider-next',
    prevEl: '.main-slider-prev',
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
