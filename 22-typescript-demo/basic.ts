// NOTE: Primitives
let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isCool: boolean;
isCool = true;

// NOTE: arrays and objects
let hobbies: string[];
hobbies = ['eating', 'sleeping', 'coding', 'reepeting'];

let person: { name: string; age: number };
person = {
  name: 'json',
  age: 20,
};

let people: { name: string; age: number }[];

// NOTE: Type inferecne
let course = 'Picking up chicks for dummies';
// course = 123456;

// Union Types
let course2: string | number = 'How to teach your dog quantum physics';
course2 = 123456;

// NOTE: Type Alliases
type Person = { name: string; age: number };

let human: Person;

// NOTE: functions & function types
function add(a: number, b: number): number {
  return a + b;
}

function print_1234(value: any) {
  console.log(value);
}

// NOTE: generics
function insertAtBeginnig<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
