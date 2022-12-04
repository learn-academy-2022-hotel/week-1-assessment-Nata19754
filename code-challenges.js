// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

//function signature
//input:number
//output: string indicating  whether input is below, at, or above boiling point

//input: = 42
//output: "42 is below boiling point"

//input = 350
//output: "350 is above boiling point"

//input = 212
//output: "212 is at boiling point"

// Process
// create a function called boilPoint that takes in a number called fahrenheit
//created if,if else , and else statements to be able to have an out come to all 3 variables
// if fahrenheit is less than 212 return fahrenheit is below boiling point
// if fahrenheir is equalto 212 return fahrenheit is at boiling point
// else return fahrenheit is above boiling point
// string interpolation for return statement

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"


const boilPoint = (fahrenheit) => { 
        if (fahrenheit < 212){
    return (`${fahrenheit} is below boiling point`)
        }
        else if (fahrenheit === 212){
            return (`${fahrenheit} is at boiling point`)
        }
        else {
            return (`${fahrenheit} is above boiling point`)
        }
    }
    console.log(boilPoint(temp1)) 
    // // Output: 42 is below boiling point

    console.log(boilPoint(temp2))
    // // Output: 350 is above boiling point

    console.log(boilPoint(temp3))
    // //Output: 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
//built in method .concat
//input: new variable created
//output: number indicating total length of new combined array 

// Process
// Create a new 3rd variable
//this 3rd variable will be the outcome of the 2 original arrays merged into 1 array
//use an accessor (.concat)to merge the arrays
//set the new variable equal to the merged arrays
//run code


const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const newPadres= (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
console.log(newPadres.length);


  

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// function/spread operator
// input:
// output: backwards string

//process
//set a function to reverse the string
//make a string into the array by using spread operator
//once I have an array, use reverse method
//put the reversed array into a string again by using the join method

const currentCohort = "Hotel 2022" 
// Expected output: "2202 letoH"

const reverseStr = function(str){
    return [...str].reverse().join('')
} 
console.log(reverseStr(currentCohort));


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
//built-in-method
//input: number (value) in array
//output: number indicating the last index of given value

//process:
//Decide which built in method to use
// use an accessor- .last use to find the lastindex of a repeated value
//run code

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

console.log(myNumbers.lastIndexOf(42))
// output: 7

console.log(myNumbers.lastIndexOf(10))
// output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// comparison function
// input:variable
// output: sort numbers in array from largest to smallest
 
// process
//create a comparison function
//determine variable that will be used
//have number called and function will swap them
// will continue to swap until number are in order from largest to smallest
//run code

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
 
sanDiegoSummerTemperatures.sort((a,b) => b-a)
console.log(sanDiegoSummerTemperatures)
// outcome: 82, 80, 79, 77, 76, 73, 72

sanDiegoWinterTemperatures.sort((a,b) => b-a)
console.log(sanDiegoWinterTemperatures)
// outcome:68, 67, 66, 66, 62, 59, 59