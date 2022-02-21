// Iteration 1: Names and Input
const hacker1 = "Marco";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Akanksha";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
const hacker1Uppercase = hacker1.toUpperCase();
let hacker1CapitalLetters = '';
for (let i = 0; i < hacker1Uppercase.length; i++) {
  hacker1CapitalLetters = `${hacker1CapitalLetters} ${hacker1Uppercase[i]}`;
}

console.log(hacker1CapitalLetters.slice(1, hacker1CapitalLetters.length));
