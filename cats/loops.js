let catCount = prompt('How many cats?');
let cats = [];
let i = 0;

// Load the array
while (i < catCount) {
  let cat = {};
  cat.name = prompt('Name?');
  cat.age = prompt('Age?');
  cat.weight = prompt('Weight?');       // string
  cat.weight = parseFloat(cat.weight);  // number
  cats.push(cat);

  i++; // same as `i = i + 1` or `i += 1`
}

// Print the contents of the array
i = 0;
while (i < cats.length) {
  document.write('<h2>' + cats[i].name + '</h2>');
  document.write('<p><strong>Age</strong>: ' + cats[i].age + '</p>');
  document.write('<p><strong>Weight:</strong> ' + cats[i].weight + '</p>');
  document.write('<p><strong>Weight with raincoat and boots:</strong> ' + (cats[i].weight + 0.25) + '</p>');

  i++;
}
