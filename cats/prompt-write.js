let name = prompt('Name?');
let age = prompt('Age?');
let weight = prompt('Weight?'); // string
weight = parseFloat(weight);    // number

document.write('<p><strong>Name:</strong> ' + name + '</p>');
document.write('<p><strong>Age</strong>: ' + age + '</p>');
document.write('<p><strong>Weight:</strong> ' + weight + '</p>');
document.write('<p><strong>Weight with raincoat and boots:</strong> ' + (weight + 0.25) + '</p>');
