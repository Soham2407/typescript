"use strict";
const user1 = ["Max", 30, true];
const user2 = ["Maria", 21, false];
// user1.push("admin");
const displayInfo = (user) => {
    const [name, age, isMarried] = user;
    console.log(`My name is ${name}. I'm ${age} years old. and I am ${isMarried ? "married" : "single"}`);
};
displayInfo(user1);
displayInfo(user2);
// enums
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
})(Role || (Role = {}));
const adminUser = {
    email: "admin@gmail.com",
    password: "abcd",
    role: Role.ADMIN,
};
const normalUser = {
    email: "max@gmail.com",
    password: "pqr",
    role: Role.USER,
};
const accessReport = (user) => {
    return `${user.email} has ${user.role === "admin"
        ? "authority to edit users."
        : "not able to edit users."}`;
};
console.log(accessReport(adminUser));
console.log(accessReport(normalUser));
