// example 1
const func = (a: number, b: number): number => {
  return a * b;
};

console.log(func(10, 20));

// example 2
type FuncType = (a: number, b: number) => number;

const func1: FuncType = (a, b) => {
  return a * b;
};

console.log(func1(4, 7));

// optional parameter
type FuncType1 = (a: number, b: number, c?: number) => number;

const func2: FuncType1 = (a, b, c) => {
  // type guard
  if (typeof c === "undefined") return a * b;
  return a * b * c;
};

console.log(func2(10, 12));
console.log(func2(2, 3, 6));

// default parameter
type FuncType3 = (a: number, b: number, c?: number) => number;

const func3: FuncType3 = (a, b, c = 5) => {
  return a * b * c;
};

console.log(func3(10, 12));
console.log(func3(2, 3, 3));

// rest parameter
const restExample = (...m: number[]): number[] => {
  return m;
};

console.log(restExample(10, 20, 30));
