// arrays
let arr1: string[] = ["abc", "xyz", "pqr"];

let arr2: (string | number)[] = ["tos", "sdf", 1876];

arr1.push("jkl");
arr2.push(9878);

// objects
let obj1: object = {};

let obj2: {
  prop1: number;
  prop2: string;
} = {
  prop1: 10,
  prop2: "abc",
};

console.log(obj2);

// type alias - create custom type
type User = {
  firstName: string;
  age: number;
  hobbies: string[];
};

const user1: User = {
  firstName: "virat",
  age: 34,
  hobbies: ["music", "cricket"],
};

console.log(user1);
