// active header dropdown
const headerNavItems = document.querySelectorAll('.header-nav-item');
const dropDownItems = document.querySelectorAll('.header-dropdown-list');
const dropdownLines = document.querySelectorAll('.dropdown-line');

headerNavItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    // const dropDownItem = e.currentTarget.querySelector('.header-dropdown-list');
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

    // if (e.currentTarget === item) {
    //   item.classList.toggle('active');
    // } else {
    //   item.classList.remove('active');
    // }

    // dropDownItems.forEach((item) => {
    //   if (dropDownItem === item) {
    //     dropDownItem.classList.toggle('active');
    //   } else {
    //     item.classList.remove('active');
    //   }
    // });
  });
});
