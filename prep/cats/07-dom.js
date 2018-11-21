function printCat(cat) {
  let div = document.querySelector('#cats');
  div.innerHTML += '<h2>' + cat.name + '</h2>';
  div.innerHTML += '<p>Age: ' + cat.age + '</p>';
  div.innerHTML += '<p>Weight: ' + cat.weight + '</p>';
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
