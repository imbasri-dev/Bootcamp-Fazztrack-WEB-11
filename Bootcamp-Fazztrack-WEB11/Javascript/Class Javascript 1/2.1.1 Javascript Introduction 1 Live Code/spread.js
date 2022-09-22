// spread
// copy array
const hobbies1 = ["Reading", "Swimming"];
const hobbies2 = ["Cooking", "Playing"];

const hobbies3 = [...hobbies1, "Running"];
// console.log(hobbies3);
// combine array
const totalHobbies = [...hobbies2, ...hobbies1];
// console.log(totalHobbies);

// overwrite array
const hobbies4 = ["Reading", "Camping"];
// console.log([...hobbies1, ...hobbies4]);

// copy object
const mathOp = {
  addition: "+",
  substraction: "-",
};
const mathOp2 = {
  division: "/",
};

const mathOperator = { ...mathOp, multiplication: "*" };
// console.log(mathOperator);
const combinedOperator = { ...mathOp, ...mathOp2 };
// console.log(combinedOperator);

// overwrite object
// mengganti value yang key nya sama
const loginInfo = {
  email: "mail@mail.com",
  pass: "fazz123",
};
const additionalLoginInfo = {
  email: "mail@fazztrack.com",
  fullname: "Fazztrack",
};
const newLoginInfo = { ...loginInfo, ...additionalLoginInfo };
console.log(newLoginInfo);
