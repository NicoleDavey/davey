let catCount = prompt('How many cats?');
let cats = [];

for (let i = 0; i < catCount; i++) {
  let cat = {};
  cat.name = prompt('Name?');
  cat.age = prompt('Age?');
  cat.weight = prompt('Weight?');
  cats.push(cat);
}

for (let i = 0; i < cats.length; i++) {
  document.write('<h2>' + cats[i].name + '</h2>');
  document.write('<p>Age: ' + cats[i].age + '</p>');
  document.write('<p>Weight: ' + cats[i].weight + '</p>');
}
