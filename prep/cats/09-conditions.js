function printCat(cat) {
  let div = document.querySelector('#cats');
  div.innerHTML += '<h2>' + cat.name + '</h2>';
  div.innerHTML += '<ul>';
  div.innerHTML += '<li>Age: ' + cat.age + '</li>';
  div.innerHTML += '<li>Weight: ' + cat.weight + '</li>';

  if (cat.name === 'Yoshi' || cat.name === 'yoshi') {
    div.innerHTML += '<li><img src="yoshi.jpg"></li>';
  } else if (cat.name === 'Furry' || cat.name === 'furry') {
    div.innerHTML += '<li><img src="furry.jpg"></li>';
  } else {
    div.innerHTML += '<li>(no photo available)</li>';
  }

  div.innerHTML += '</ul>'
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
