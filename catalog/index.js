function changeHeading() {
  let heading = document.querySelector('h1');
  let heading2 = document.querySelector('.changeMe');
  heading.textContent = 'Ye Olde CATalog';
  heading2.textContent = 'Oh yeah';
}

let button = document.querySelector('button');
button.addEventListener('click', changeHeading);
