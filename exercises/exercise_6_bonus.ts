/*
 * ---------------------------------------------------------------------------------------------------- 
 * Bonus exercise 6/5: Make sure the code works correctly with the use of type predicates.
 * ----------------------------------------------------------------------------------------------------  
*/

const person2 = {
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

const animal2 = {
    name: 'Felix',
    age: 10,
    children: [
        'Minoe',
        'Pluisje'
    ],
    ability: 'catch mice',
    address: {
        houseNumber: 53,
        street: 'Redenstraat',
        zipCode: '9024BG'
    }
}

type AddressType = {
    houseNumber: number;
    street: string;
    zipCode: string;
}

type AnimalType = {
    name: string;
    age: number;
    ability: string;
    children: string[];
    address: AddressType;
};

type PersonType = {
    name: string;
    age: number;
    children: string[];
    occupation: string;
    address: AddressType;
};

function isPerson(animalOrPerson: AnimalType | PersonType) {
    return Boolean((animalOrPerson as PersonType).occupation);
}

function isAnimal2(animalOrPerson: AnimalType | PersonType) {
    return Boolean((animalOrPerson as AnimalType).ability);
}

function petOrFire(animalOrPerson: AnimalType | PersonType): void {
    if (isPerson(animalOrPerson)) {
        console.log(`Person ${animalOrPerson.name} with occupation ${animalOrPerson.occupation} has been fired.`)
    } else if (isAnimal2(animalOrPerson)) {
        if (isAnimal2(animalOrPerson)) {
            console.log(`Animal ${animalOrPerson.name} has been pet and will now ${animalOrPerson.ability}.`)
        }
    }
}

petOrFire(person2); // John should be fired.
petOrFire(animal2); // We don't fire animals, we pet them!