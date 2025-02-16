// Iteration 1: Names and Input
const hacker1 = 'Marco'
console.log(`The driver's name is ${hacker1}`)
const hacker2 = 'Akanksha'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  )
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  )
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  )
}
// Iteration 3: Loops
const hacker1Uppercase = hacker1.toUpperCase()
let hacker1CapitalLetters = ''
for (let i = 0; i < hacker1Uppercase.length; i++) {
  hacker1CapitalLetters = `${hacker1CapitalLetters} ${hacker1Uppercase[i]}`
}

console.log(hacker1CapitalLetters.slice(1, hacker1CapitalLetters.length))

let hacker2Reverse = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse = `${hacker2Reverse}${hacker2[i]}`
}
console.log(hacker2Reverse)

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`)
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}

let paragraphs = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`

const paragraphsSubstring = paragraphs.split(' ')
console.log(paragraphsSubstring.length)

const paragraphsNumberOfEt = paragraphs.split(' et ')
console.log(paragraphsNumberOfEt.length - 1)

const phraseToCheck = "Ai lati d'Italia"

let phraseToCheckCleaned = ''
let reversePhraseToCheckCleaned = ''

for (i = 0; i < phraseToCheck.length; i++) {
  // clean spaces and apostrophe
  if (phraseToCheck[i] !== ' ' && phraseToCheck[i] !== "'") {
    phraseToCheckCleaned = `${phraseToCheckCleaned}${phraseToCheck[
      i
    ].toUpperCase()}`
  }
}
console.log(phraseToCheckCleaned)
for (i = phraseToCheckCleaned.length - 1; i >= 0; i--) {
  reversePhraseToCheckCleaned = `${reversePhraseToCheckCleaned}${phraseToCheckCleaned[i]}`
}
console.log(reversePhraseToCheckCleaned)
if (phraseToCheckCleaned === reversePhraseToCheckCleaned) {
  console.log(`"${phraseToCheck}" is a Palindrome!`)
} else {
  console.log(`"${phraseToCheck}" is not a Palindrome!`)
}
