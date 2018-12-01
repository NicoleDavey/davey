function changeHeading() {
  let heading = document.querySelector('h1');
  heading.textContent = 'Ye Olde CATalog';

  let heading2 = document.querySelector('.changeMe');
  heading2.textContent = 'Oh yeah';
}

let button = document.querySelector('button');
button.addEventListener('click', changeHeading);
