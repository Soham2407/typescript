"use strict";
// classes
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.userId = String(Math.random() * 100);
    }
    getPassword() {
        return this.password;
    }
    // getters and setters
    get getUserName() {
        return this.username;
    }
    set setUserName(userName) {
        this.username = userName;
    }
}
const user1 = new User("John", "john@gmail.com", 123);
console.log(user1.getPassword());
console.log(user1.userId);
// console.log(user1.email); not accessible
// user1.userId = 100
// access getter and setters
console.log(user1.getUserName);
user1.setUserName = "Michal";
console.log(user1.getUserName);
class Admin extends User {
    constructor(username, email, password, loginCount) {
        super(username, email, password);
        this.loginCount = loginCount;
    }
    getEmail() {
        return this.email;
    }
}
const admin1 = new Admin("Adam", "adam@abc.com", 173, 10);
console.log(admin1.getEmail());
