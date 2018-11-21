function printCat(cat) {
  let div = document.querySelector('#cats');
  div.innerHTML += '<li><strong>' + cat.name + '</strong></li>';
  div.innerHTML += '<li>Age: ' + cat.age + '</li>';
  div.innerHTML += '<li>Weight: ' + cat.weight + '</li>';
}

function addCat() {
  let cat = {};
  cat.name = prompt('Name?');
  cat.age = prompt('Age?');
  cat.weight = prompt('Weight?');
  printCat(cat);
}

////////////////////////////////////

let btn = document.querySelector('button');
btn.onclick = addCat
