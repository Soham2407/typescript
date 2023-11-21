"use strict";
// union
const userInput = (value) => {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    if (typeof value === "number") {
        console.log(`result: ${value * value}`);
    }
};
userInput(5);
userInput("king");
const user1 = {
    name: "demo",
    age: 20,
    empId: "KS323",
    department: "IT",
};
const createProfile = (user) => {
    console.log(`My name is ${user.name} & emp id is ${user.empId}`);
};
createProfile(user1);
