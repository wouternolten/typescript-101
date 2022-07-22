/*
 * ---------------------------------------------------------------------------------------------------- 
 * Exercise 4/5: Make use of the enum type in as much places as possible in the code below.
 * ----------------------------------------------------------------------------------------------------
 */

const environment = {
    production: 'production',
    acceptance: 'acceptance',
    testing: 'testing'
};

function logEnvironment(env: unknown) {
    if (env === environment.acceptance) {
        console.log('Acceptance');
    } else if (env === environment.production) {
        console.log('Production');
    } else if (env === environment.testing) {
        console.log('Testing');
    } else {
        console.log('No matching environment found!');
    }
}

const exerciseData = ['acceptance', 'testing', 'production'];

logEnvironment(exerciseData[0]);
logEnvironment(exerciseData[1]);
logEnvironment(exerciseData[2]);

/*
 * We have some resistor data (color and value).
 * We now would like to have a function which gets a name of a color as an argument and retrieves the resistance value.
 * Black: 5
 * Brown: 6
 * Red: 7
 * Orange: 8
 * Yellow: 9
 * Green: 10
 * Blue: 11
 * Violet: 12
 * Grey: 13
 * White: 14
 */