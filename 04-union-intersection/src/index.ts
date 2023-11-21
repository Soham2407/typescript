// union
const userInput = (value: number | string) => {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }

  if (typeof value === "number") {
    console.log(`result: ${value * value}`);
  }
};

userInput(5);
userInput("king");

// intersection

type User = {
  name: string;
  age: number;
};

type Employee = {
  empId: string;
  department: string;
};

type UserProfile = User & Employee;

const user1: UserProfile = {
  name: "demo",
  age: 20,
  empId: "KS323",
  department: "IT",
};

const createProfile = (user: UserProfile) => {
  console.log(`My name is ${user.name} & emp id is ${user.empId}`);
};

createProfile(user1);
