/*
 * ----------------------------------------------------------------------------------------------------
 * Excercise 1/5: Defining types for a functions argument(s)
 * Correctly type the arguments of the function without using the any or unknown keywords.
 * Bonus points for those who can make the Object and Array types immutable with TypeScript.
 * ----------------------------------------------------------------------------------------------------
 */

function sayHi(name: unknown) {
    console.log(`Hello ${name}`);
}

sayHi('John Hammond');

function multiplyAge(age: unknown, multiplier: unknown) {
    console.log(`If you were ${multiplier} times as old as you are now, your age would be: ${age * multiplier}`);
}

multiplyAge(29, 5);

function printNovel(novelSentences: unknown) {
    console.log(`${novelSentences.join(' ')}`);
}

printNovel(['Once upon a time in the West', 'there was a little TypeScript developer', 'called', 'you!']);

function constructHouse(builders: unknown) {
    console.log(
        builders
            .map(builder => `Builder ${builder.name} has started building the house on day ${builder.startDay} in year ${builder.startYear}.`)
            .join(' ')
    );
}

constructHouse([
    {
        name: 'Fernando Sucre',
        startDay: 5,
        startYear: 2005
    },
    {
        name: 'Michael Scofield',
        startDay: 8,
        startYear: 2053
    },
    {
        name: 'Bruce Springsteen',
        startDay: 2,
        startYear: 1993
    }
]);

function callPerson(firstName: unknown, lastName: unknown): void {
    console.log(`Now calling: ${firstName}${lastName ? lastName : ''}. Please stand by.`);
}

callPerson('Steve-o');
callPerson('Peeta', 'Mellark');