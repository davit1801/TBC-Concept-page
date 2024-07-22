// active header dropdown
const header = document.querySelector('.header');
const headerNavItems = document.querySelectorAll('.header-nav-item');
// const dropDownItems = document.querySelectorAll('.header-dropdown-list');
const dropdownLines = document.querySelectorAll('.dropdown-line');

headerNavItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    item.classList.toggle('active');
    headerNavItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    dropdownLines.forEach((line) => {
      if (line.parentElement.classList.contains('active')) {
        line.style.transform = 'scaleX(1)';
      } else {
        line.style.transform = 'scaleX(0)';
      }
    });
  });

  headerNavItems.forEach((item) => {
    if (item.classList.contains('active')) {
      header.setAttribute('data-dropdown-active', true);
    }
  });
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
