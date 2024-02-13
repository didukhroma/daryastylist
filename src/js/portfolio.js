import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const portfolio = document.querySelector('.js-portfolio');
const button = document.querySelector('.js-button');

const settingsSimpleLightbox = {
  selector: '.js-portfolio-img',
  srcImage: 'src',
};

// const galleryLightBox = new SimpleLightbox(settingsSimpleLightbox.selector, {
//   sourceAttr: settingsSimpleLightbox.srcImage,
//   captionsData: settingsSimpleLightbox.caption,
//   captionDelay: 250,
//   animationSpeed: 500,
// });

const handleClick = () => {
  if (button.textContent === 'Показати більше') {
    [...portfolio.children].forEach(el =>
      el.classList.remove('visually-hidden')
    );
    button.textContent = 'Показати меньше';
    return;
  }

  button.textContent = 'Показати більше';
  [...portfolio.children].forEach(el => {
    Number(el.dataset.id) > 4 && el.classList.add('visually-hidden');
  });
};

// const openModal = e => {
//   if (e.target === e.currentTarget) return;
//   // galleryLightBox.on();
// };

// button.addEventListener('click', handleClick);

// portfolio.addEventListener('click', openModal);
