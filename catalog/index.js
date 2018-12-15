function changeHeading(ev) {
  ev.preventDefault();
  let catForm = ev.target;

  // get the values from the form
  let catName = catForm.catName.value;
  let catAge = catForm.catAge.value;
  let favoriteColor = catForm.favoriteColor.value;

  // grab the list from the page
  let catList = document.querySelector('ul.catList');

  // add the values to the list
  catList.innerHTML += `<li style="color: ${favoriteColor}">${catName}, ${catAge}</li>`;

  // clear the form
  catForm.reset();
}

let form = document.querySelector('#catForm');
form.addEventListener('submit', changeHeading);
