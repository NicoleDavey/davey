let cats = [];

let cat = {};
cat.name = prompt('Name?');
cat.age = prompt('Age?');
cat.weight = prompt('Weight?');
cats.push(cat);

let cat2 = {};
cat2.name = prompt('Name?');
cat2.age = prompt('Age?');
cat2.weight = prompt('Weight?');
cats.push(cat2);

document.write('<h2>' + cat.name + '</h2>');
document.write('<p>Age: ' + cat.age + '</p>');
document.write('<p>Weight: ' + cat.weight + '</p>');

document.write('<h2>' + cat2.name + '</h2>');
document.write('<p>Age: ' + cat2.age + '</p>');
document.write('<p>Weight: ' + cat2.weight + '</p>');
