// 1::Spread operator

const names = ['mugerwa', 'obadiah']
const newNames = ['Peter', 'James']
const all = [...names, ...newNames];
// console.log(all)

// Spreading Each A string
const myname = 'mugerwa';
// console.log(...myname)






// 2::Template literals ``

// Without bak ticks
const name = "mugerwa";
const age = 23
// console.log('My name is ' + name + ' am ' + age + ' years old')

// With back ticks

// console.log(`My name is ${name} am ${age} years old`)


// alert(`${age>23?"You're old":"Still young"}`)





// 3:::Arrow functions () =>

// function add(x,y){
//     return x+y
// }
// console.log(add(3,4))


// using () =>

const add = (x, y) => (x + y) * 2

// console.log(add(3,4))

const users = () => ({ name: 'mugerwa', age: 12 })
// console.log(users())





// 4::map function

const profile = ['mugerwa', 'obadiah'];
const result = (profile.map(name => name.toUpperCase()))
//  console.log(result)

const data = [
    {
        id: 1,
        name: 'mugerwa'
    },
    {
        id: 2,
        name: 'derrick'
    }
]


// data.map((obj)=>console.log(obj.name.toUpperCase()))
// 5::Mutable & immutable
// mutable can be changed
// immutable cant be changed



// 6::Resr parametet .....
const addNumbers = (...values) => values.map(value => value * 2)
// console.log(addNumbers(2,3,2,4))



// 7:::Filter  both filter() and map() take in a function as an argument and create a new array
// filter will create an new array only for filtered itemsbasing on the condition

const employees = [
    {
        id: 1,
        name: "Mugerwa",
        position: "Senior Developer"
    },
    {
        id: 2,
        name: "Derrick",
        position: "Senior Developer"
    },
    {
        id: 3,
        name: "Martha",
        position: "Junior Developer"
    }

]

// console.log(employees.filter(employee=>employee.position=='Senior Developer'))







// 8::Reducer this returns a single value , it takes in a function that accepts two  parametetrs , one the accumulator and the other is a value

// looks like sum=0
// sum+=number

const numbers = [2, 3, 4]

const sum = numbers.reduce((sum, number) => sum += number, 0);
// console.log(sum)



// 9::Destructuring 0

// 1::In Objects

const dataBase = {
    id: 1,
    username: "mugerwa",
    address: {
        city: 'kampala',
        country: 'Uganda'
    }
}
const { id, username, address: { city, country } } = dataBase;
// console.log(dataBase)


// 2::In Arrays
const scores = [20, 30, 40]
const [x] = scores
// console.log(x)



// FIreBase response
const response = [
    {
        post: "Introduction to firebase",
        createdAt: "12-May-2022",
        userId: "mugerwa"
    },
    {
        post: "Introduction to firebase",
        createdAt: "12-May-2022",
        userId: "mugerwa"
    }
]

const responseId = [
    {
        id: 1
    },
    {
        id: 2
    }
]
// console.log(response)
// console.log(responseId);
response.map((res) => console.log({ ...res, id: Math.floor(Math.random() * 10) }));