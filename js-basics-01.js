console.log('Hello World')

let name="John"
console.log(name)
name='Jane'
//console.log(name)

//let x = 10 //number
//let y = 20
//console.log(x+y)

let place = 'San Francisco' // string
//console.log(place)

let a = 10
let b = 20
console.log(a*b)

let isVaccinated = false //boolean
//console.log(isVaccinated)

//console.log(10 > 10)

// let x = 20; //initialization
// let y = 100
// let z
// console.log(x)
// z = x*y // assignment

// console.log(z)

// let fruits = 10
// let persons = 2
// console.log('Each person will get ' + fruits/persons)

// console.log((10+20)*4) // order of precedence () */ +/-


let person1 = 'John'
let person2 = 'Jane'
let nameOfPerson
nameOfPerson = person2

//console.log(nameOfPerson)

//if - else condition
// if(nameOfPerson == 'John') {
//     console.log('The name is John')
// } else {
//     console.log('The name is Jane')
// }


if(40 < 200) {
     console.log('40 is lesser than 200')
} else if(40 ==20) {
    console.log('40 is equal to 20') 
} else {
    console.log('40 is greater to 20')  
}

console.log(1)
console.log(2)
console.log(3)
console.log(4)
let xx = 100
console.log(++xx) // 101
console.log(--xx)

for(let i = 1; i<=100; i++) {
   // console.log(i) // 1, 2, 3, 4,100, 101

}

for(x = 0; x <=5; x++) {
    console.log('Printing x: '+x)
}


// string
// number
// boolean
// expression 10 > 100
// if else
// for
// increment, decrement

//javascript objects

// car
    // type  - sedan, SUV, Minivan, Truck
    // color : red, blue, black, silver
    // model : camry, sienna, rav4
    // year: 2022, 2021
    // numberOfWheels - 4, 6
// person
    // name
    // age
    // address
    // phoneNumber
    // emailAddress
    // interests
    // faceBookId

//let name = 'Shan' // can change
// const name ='Adam' // cannot change during the program

let person = {
    name: 'Shan',
    age: 25,
    emailAddress: 'shan@test.com',
    phoneNumber: 1234567890,
    address: {
        addressLine: '123 Main St',
        addressLine2: 'Apr #3',
        city: 'San Jose',
        state: 'CA',
        zip: '95134-3432'
    },
    isStudent: true,
    interests: ['sports', 'reading', 'travel', 'cooking'],
    favoriteNumbers: [3,7,90, 56,32]
}
// dot operator

//console.log('The person name is : '+person.name)
//console.log('The person age is : '+person.age)

console.log('The person  is : '+JSON.stringify(person))
console.log('The first favorite numbers are : '+person.address['city'])


let carCompany = 'Toyota'
let carYear = 2023
let numberOfYears = 40 
const colorsOfCar = ['silver', 'black', 'white', 'red']
console.log(colorsOfCar[3])
const numbers = [1,89,-4, 0, -56, 895]
// 'silver, gray, green, black'

console.log(numbers.length)

console.log(numbers[4])

console.log(numbers.indexOf(-4))


console.log(colorsOfCar.indexOf('black1'))

for(let i = 1;i<colorsOfCar.length; i++) {
    console.log(colorsOfCar[i])
}

let obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 10,
    key5: false,
    key6: [],
    key7: [10,90,54,32],
    key8: ['string1', 'string2', 'string3', 'string4'],
    key9: {

    }
}

// JSON - Javascript Object Notation

// functions
// block of code that can be reused
// statement1
// statement2
//statement3


function functionName() {
    //statements
}
function printSomething() {
    console.log('Hello....')
}

function addTwoNumbers(a, b) {
    return a + b
}



function forLoop() {
    for(let i =0;i<10; i++) {
        console.log('The value of i is: '+i)
    }
}

console.log(addTwoNumbers(10, 60))

console.log(addTwoNumbers(75, 34))

let x1 = addTwoNumbers(9, 4)
console.log(x1)

function findSquares(num) {
    return num * num
}

console.log(findSquares(100))

console.log(findSquares(7))

function mutiplyNumbers(a,b,c) {
    let x = 10*a
    let y = b-1;
    let z = 80+c
    return x+y+z
}
console.log(mutiplyNumbers(1,2,3))

function printMyName(name) {
    return 'My name is: '+name
}

console.log(printMyName('Sam'))
console.log(printMyName('Mary')) 

let newFunction = function(x,y) {
    return 'the product of the  numbers is: ' + x*y
}

let var1 = newFunction(10,30)
console.log(var1)