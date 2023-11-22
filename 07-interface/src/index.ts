interface Employee {
  empId: number;
  department: string;
}

interface Person {
  name: string;
  age: number;
  getInfo: () => string;
}

class User implements Person, Employee {
  name: string;
  age: number;
  empId: number = Math.random() * 50;
  department: string;

  constructor(name: string, age: number, department: string) {
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
