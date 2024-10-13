

let age: number;

age = 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;


let hobbies: string[];

hobbies = ['Sports','Cooking','Game'];

type Person = {
    name: String;
    age: number;
}

let person: Person;

// person: {
//     name: string;
//     age: number;
// };

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true
// };

let people: Person[];


let course: string | number = 'React - the complete guide';

course = 1243543;


// functions & types

function addSum(a: number, b: number){
    return a + b;
}

function insertAtBeginning(aray: any[], value: any){
    const newArray = [value, ...aray];
    return Array;
}


