"use strict";
class User {
    constructor(name, age, department) {
        this.empId = Math.random() * 50;
        this.name = name;
        this.age = age;
        this.department = department;
    }
    getInfo() {
        return `name: ${this.name}, age: ${this.age}, department: ${this.department}`;
    }
}
const user1 = new User("dave", 31, "IT");
console.log(user1.getInfo());
