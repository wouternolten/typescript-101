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

function getReadableEnvironment(env) {
    if (env === environment.acceptance) {
        return 'Acceptance';
    } else if (env === environment.production) {
        return 'Production';
    } else if (env === environment.testing) {
        return 'Testing';
    } else {
        return 'No matching environment found!';
    }
}

const exerciseData = ['acceptance', 'testing', 'production'];

console.log(getReadableEnvironment(exerciseData[0]));
console.log(getReadableEnvironment(exerciseData[1]));
console.log(getReadableEnvironment(exerciseData[2]));

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