const portfolio = document.querySelector('.js-portfolio');
const button = document.querySelector('.js-button');

const markup = () => {
  console.log('go');
  const markDown = [];

  for (let i = 1; i <= 18; i++) {
    markDown.push(`<li  class="portfolio-list-item ${
      i > 4 && 'visually-hidden'
    }" data-id="${i}">
    <div class="set-img-wrapper">
      <img
       srcset = './img/portfolio/img${i}.jpg 1x, ./img/portfolio/img${i}.jpg@2x.jpg 2x'
      src="./img/portfolio/img${i}.jpg"
       alt="hair style" 
        loading = 'lazy'/>
    </div>
  </li>`);
  }
  return markDown.join('');
};

portfolio.insertAdjacentHTML('afterbegin', markup());

const handleClick = () => {
  if (button.textContent === 'Показати більше') {
    [...portfolio.children].forEach(el =>
      el.classList.remove('visually-hidden')
    );
    button.textContent = 'Показати меньше';
    return;
  }

  button.textContent = 'Показати більше';
  [...portfolio.children].forEach((el, i) => {
    i >= 4 && el.classList.add('visually-hidden');
  });
};

button.addEventListener('click', handleClick);
