function changeHeading(ev) {
  ev.preventDefault();
  let catForm = ev.target;

  // change the h1
  let catName = catForm.catName.value;
  let heading1 = document.querySelector('h1');
  heading1.textContent = catName;

  // change the h2
  let catAge = catForm.catAge.value;
  let ageHeading = document.querySelector('h2.age');
  ageHeading.textContent = catAge;

  // clear the form
  catForm.reset();
}

let form = document.querySelector('#catForm');
form.addEventListener('submit', changeHeading);
