function printCat(cat) {
  document.write('<h2>' + cat.name + '</h2>');
  document.write('<p>Age: ' + cat.age + '</p>');
  document.write('<p>Weight: ' + cat.weight + '</p>');
}

function addCat(cats) {
  let cat = {};
  cat.name = prompt('Name?');
  cat.age = prompt('Age?');
  cat.weight = prompt('Weight?');
  cats.push(cat);
  printCat(cat);
}

////////////////////////////////////

let catCount = prompt('How many cats?');
let myCats = [];

for (let i = 0; i < catCount; i++) {
  addCat(myCats);
}
