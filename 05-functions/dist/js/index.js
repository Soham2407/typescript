"use strict";
// example 1
const func = (a, b) => {
    return a * b;
};
console.log(func(10, 20));
const func1 = (a, b) => {
    return a * b;
};
console.log(func1(4, 7));
const func2 = (a, b, c) => {
    // type guard
    if (typeof c === "undefined")
        return a * b;
    return a * b * c;
};
console.log(func2(10, 12));
console.log(func2(2, 3, 6));
const func3 = (a, b, c = 5) => {
    return a * b * c;
};
console.log(func3(10, 12));
console.log(func3(2, 3, 3));
// rest parameter
const restExample = (...m) => {
    return m;
};
console.log(restExample(10, 20, 30));
