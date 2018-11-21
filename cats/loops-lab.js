// Prompt the user for a number.
let n = prompt('Enter a number');

// Print to the page all the numbers
// from 1 to the number they entered.
let i = 0;

while (i < n) {
  document.write(i + 1 + ' ');
  i ++;  // increment i
}

// Ask how much foolishness.
let foolishness = prompt('How much foolishness?');

// Print "woof" that many times.
i = 0;

while (i < foolishness) {
  document.write('woof ');
  i++;
}
