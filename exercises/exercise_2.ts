/*
 * ----------------------------------------------------------------------------------------------------
 * Exercise 2/5: Function return types
 * Type the return type of the functions without using the any or unknown keywords.
 * ----------------------------------------------------------------------------------------------------
 */

function sayHello(name: string) {
    console.log(`Hello ${name}`);
}

sayHello('John Hammond');

const person = {
    name: 'John',
    age: 67,
    children: [
        'Dirk',
        'Dries'
    ],
    address: {
        houseNumber: 53,
        street: 'Redenstraat',
        zipCode: '9024BG'
    }
}

function getAge() {
    return person.age;
}

function getName() {
    return person.name;
}

function getChildren() {
    return person.children;
}

function getAddress() {
    return person.address;
}

function getAgeAsync() {
    return Promise.resolve(getAge());
}

console.log(getName());
console.log(getChildren());
console.log(getAddress());
(async () => {
    const age = await getAgeAsync();
    console.log(age);
})();

/*
 * Write a function that (optionally) takes a name and returns either:
 * "There's a cookie left for {name}, but please leave some for me." - If there is a name
 * "There's a cookie left for you, but please leave some for me." - If there's no name
 */

// Bonusss for those that are blazing fast
async function getDitto() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', { method: 'GET' });
    
    return response.json();
}

(async () => {
    const ditto = await getDitto();
    console.log(ditto);
})();