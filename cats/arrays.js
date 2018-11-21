let cats = [];

let cat = {};
cat.name = prompt('Name?');
cat.age = prompt('Age?');
cat.weight = prompt('Weight?');       // string
cat.weight = parseFloat(cat.weight);  // number
cats.push(cat);

let cat2 = {};
cat2.name = prompt('Name?');
cat2.age = prompt('Age?');
cat2.weight = prompt('Weight?');       // string
cat2.weight = parseFloat(cat2.weight);  // number
cats.push(cat2);

document.write('<h2>' + cats[0].name + '</h2>');
document.write('<p><strong>Age</strong>: ' + cats[0].age + '</p>');
document.write('<p><strong>Weight:</strong> ' + cats[0].weight + '</p>');
document.write('<p><strong>Weight with raincoat and boots:</strong> ' + (cats[0].weight + 0.25) + '</p>');

document.write('<h2>' + cats[1].name + '</h2>');
document.write('<p><strong>Age</strong>: ' + cats[1].age + '</p>');
document.write('<p><strong>Weight:</strong> ' + cats[1].weight + '</p>');
document.write('<p><strong>Weight with raincoat and boots:</strong> ' + (cats[1].weight + 0.25) + '</p>');
