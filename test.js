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

