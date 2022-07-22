/*
 * ---------------------------------------------------------------------------------------------------- 
 * Exercise 3/5: Union Types & casting
 * Correctly type the argument type (Record<string, unknown>) of the function without using the any or unknown keywords.
 * You will see that you probably have to correct the logic in isAnimal to make TypeScript
 * understand what you are trying to do.
 * 
 * FYI: Use type casting very wisely, since you are overruling TypeScript.
 * ----------------------------------------------------------------------------------------------------
 */

const person = {
    name: 'John',
    age: 67,
    children: [
        'Dirk',
        'Dries'
    ],
    occupation: 'Work',
    address: {
        houseNumber: 53,
        street: 'Redenstraat',
        zipCode: '9024BG'
    }
}

const animal = {
    name: 'Felix',
    age: 10,
    children: [
        'Minoe',
        'Pluisje'
    ],
    address: {
        houseNumber: 53,
        street: 'Redenstraat',
        zipCode: '9024BG'
    }
}

function isAnimal(animalOrPerson: Record<string, unknown>): boolean {
    return !animalOrPerson.occupation;
}

isAnimal(person); // Should return false
isAnimal(animal); // Should return true