// active header dropdown
const header = document.querySelector('.header');
const headerNavItems = document.querySelectorAll('.header-nav-item');
const dropdownLines = document.querySelectorAll('.dropdown-line');
const dropdownBg = document.querySelector('.header-dropdown-bg');

headerNavItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    // checkList();
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

const wrapper = document.querySelector('.swipper-container');

let pressed = false;
let startX = 0;

wrapper.addEventListener('mousedown', (e) => {
  pressed = true;
  startX = e.clientX;
  wrapper.style.cursor = 'grabbing';

  console.log(startX);
});

wrapper.addEventListener('mouseleave', (e) => {
  pressed = false;
});

window.addEventListener('mouseup', (e) => {
  pressed = false;
  wrapper.style.cursor = 'grab';
});

wrapper.addEventListener('mousemove', (e) => {
  if (!pressed) {
    return;
  }
  // wrapper.scrollLeft += startX - e.clientX
  wrapper.style.transform = 'translate3d(-100px, 0px, 0px)';
});
