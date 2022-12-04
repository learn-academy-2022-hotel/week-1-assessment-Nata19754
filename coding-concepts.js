// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
                    // const colors = ["tangerine", "magenta", "lilac", "daffodil"]
                    // // console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The output for this code was 10 because each character in this string is added to the lenth including spaces. Therefore, if you beggining counting from left to right in the string starting with L being 1 and counting the space between learn and 2022, u get a total of 10 characters, which make up the total lenth for this string.
  

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: The output for this will be o since this code is locating the charachter located in the 4th index.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:"Ruby"
// b) Verify and explain: The output for this was "Ruby".By running console.log(languages[index]) we are being asked to look in the array and find the element in the place of 1 (since index was assigned the value of 1).Because in arrays we begin counting the elements with 0 from left to right, the index for JavaScript is 0, the index for Ruby is 1, python 2, and C++ is 4. this explains the output of the code.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: The output for this code was TypeError: weekendDays.toUpperCase is not a function . My educated guess for this is that it gave me an error because .toUpperCase is not recognized in arrays, since arrays have a collection of data not just 1 like a string.

// Taking educated guess, would love further explanation

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: The output for this code was number because the typeof operator returns a string indication the type of the value that was calculated with length. In this case  the legnth os this array is 4 representing the 4 elements inside.In result 4 is a number, explaining the outcome.
