// const a: number = 10;
// console.log(a);

//********** Arrays ************
// const arr: number[] = [10, 20, 30];
// console.log(arr);

// const arr2: (number | string)[] = [10, 20, "str"];
// console.log(arr2);

// const arr3: Array<string> = ["virat", "rohit", "jaddu"];
// console.log(arr3);

// ********** Objects *********
// const person1: {
//   firstName: string;
//   age: number;
//   gender?: string; // making optional
// } = {
//   firstName: "virat",
//   age: 35,
// };

// const person2: {
//   firstName: string;
//   age: number;
//   gender?: string; // making optional
// } = {
//   firstName: "Rohit",
//   age: 36,
//   gender: "male",
// };

// console.log(person1, person2);

// *********** type alias -> custom type
// type User = {
//   firstName: string;
//   age: number;
//   isLogin: boolean;
//   gender?: string;
// };

// const person1: User = {
//   firstName: "virat",
//   age: 35,
//   isLogin: true,
// };
// console.log(person1);

// ********* Interface in ts *********
// interface User {
//   firstName: string;
//   age: number;
//   isLogin: boolean;
//   gender?: string;
// }

// interface Admin extends User {
//   role: string;
// }

// const mainUser: Admin = {
//   firstName: "Rahul",
//   age: 26,
//   isLogin: false,
//   role: "admin",
// };

// console.log(mainUser);

// ********* Functinos **********

// const sub = (a: number, b: number): number => {
//   return a - b;
// };

// console.log(sub(10, 2));

// optional parameter
// type Add = (a: number, b: number, c?: number) => number;

// const sum: Add = (a, b, c) => {
//   // type guard
//   if (typeof c === "undefined") return a + b;
//   return a + b + c;
// };

// console.log(sum(5, 7));
// console.log(sum(5, 7, 9));

// default parameter
// type Add = (a: number, b: number, c?: number) => number;

// const sum: Add = (a, b, c = 10) => {
//   return a + b + c;
// };

// console.log(sum(5, 7));
// console.log(sum(5, 2, 9));

// rest operator
// type FuncType = (...num: number[]) => number[];

// const func: FuncType = (...num) => {
//   return num;
// };

// console.log(func(10, 20, 30, 40));

// functions with object

type Product = {
  name: string;
  price: number;
  rating: number;
};

const product: Product = {
  name: "abc",
  price: 230,
  rating: 4,
};

const getProduct = (product: Product): Product => {
  return product;
};

console.log(getProduct(product));
