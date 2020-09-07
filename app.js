// spread operator in an array

const numbers = [1,2,3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

const person = {
    name: 'Federico'
};
// spread operator in an object
const newPerson = {
    ...person,
    age: 28
};

console.log(newPerson);

// rest operator..will merge args into an array

const filter = (...args) => {
    return args.filter(el => el === 1);
};

console.log(filter(1,2,3));

// ARRRAY DESTRUCTURING
[a,b] = ['hello', 'max']
console.log(a)
console.log(b)
// pulling 1 and 2 out of the array
// leave an empty space if you want to skip a number
const numeros = [1,2,3];
[num1, , num3] = numeros;
console.log(num1, num3);

// refreshing array functions..map returns a new array

const numerotes = [1,2,3];

const doubleNumArray = numbers.map((num) => {
    return num * 2;
});
console.log(numerotes);
console.log(doubleNumArray);

