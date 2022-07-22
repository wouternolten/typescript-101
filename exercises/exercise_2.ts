/*
 * ----------------------------------------------------------------------------------------------------
 * Exercise 2/5: Function return types
 * Correctly type the return type of the functions without using the any or unknown keywords.
 * ----------------------------------------------------------------------------------------------------
 */

function sayHello(name: string): unknown {
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

function getAge(): unknown {
    return person.age;
}

function getName(): unknown {
    return person.name;
}

function getChildren(): unknown {
    return person.children;
}

function getAddress(): unknown {
    return person.address;
}

function getAgeAsync() : unknown {
    return Promise.resolve(getAge());
}

/*
 * Write a function that (optionally) takes a name and returns either:
 * "There's a cookie left for {name}, but please leave some for me." - If there is a name
 * "There's a cookie left for you, but please leave some for me." - If there's no name
 */