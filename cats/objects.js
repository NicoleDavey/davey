let cat = {};

cat.name = prompt('Name?');
cat.age = prompt('Age?');
cat.weight = prompt('Weight?');       // string
cat.weight = parseFloat(cat.weight);  // number

document.write('<p><strong>Name:</strong> ' + cat.name + '</p>');
document.write('<p><strong>Age</strong>: ' + cat.age + '</p>');
document.write('<p><strong>Weight:</strong> ' + cat.weight + '</p>');
document.write('<p><strong>Weight with raincoat and boots:</strong> ' + (cat.weight + 0.25) + '</p>');
