// tuples
type Person = readonly [string, number, boolean];

const user1: Person = ["Max", 30, true];
const user2: Person = ["Maria", 21, false];
// user1.push("admin");

const displayInfo = (user: Person) => {
  const [name, age, isMarried] = user;
  console.log(
    `My name is ${name}. I'm ${age} years old. and I am ${
      isMarried ? "married" : "single"
    }`
  );
};

displayInfo(user1);
displayInfo(user2);

// enums
enum Role {
  ADMIN = "admin",
  USER = "user",
}

type LoginUser = {
  email: string;
  password: string;
  role: Role;
};

const adminUser: LoginUser = {
  email: "admin@gmail.com",
  password: "abcd",
  role: Role.ADMIN,
};

const normalUser: LoginUser = {
  email: "max@gmail.com",
  password: "pqr",
  role: Role.USER,
};

const accessReport = (user: LoginUser): string => {
  return `${user.email} has ${
    user.role === "admin"
      ? "authority to edit users."
      : "not able to edit users."
  }`;
};

console.log(accessReport(adminUser));
console.log(accessReport(normalUser));
