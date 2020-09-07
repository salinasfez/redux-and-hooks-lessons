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