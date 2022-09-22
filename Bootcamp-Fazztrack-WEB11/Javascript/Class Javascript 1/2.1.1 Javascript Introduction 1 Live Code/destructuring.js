// memecah nilai
// array
const rgb = [90, 100, 255];
// old
// const red = rgb[0];
// const green = rgb[1];
// const blue = rgb[2];
// new
const [red, green, blue] = rgb;
// console.log(red, green, blue);

const hobbies = ["Reading", "Swimming", "Dancing", "Camping", "Plating"];
const [baca, renang, ...sisa] = hobbies;
console.log(baca, renang);
console.log(sisa);

function test(...args) {
  console.log(args);
}
// test(1, 2);
// test("anda", "saya", "kami");

// object
// old
const credential = {
  email: "fazz@mail.com",
  password: "track123",
  "jenis kelamin": "L",
  isGraduated: false,
  finals: [100, 90, 80, 90],
};

// const email = credential.email;
// const password = credential.password;
// const gender = credential["jenis kelamin"];
// const isGraduated = credential.isGraduated;
// const finals = credential.finals;

// new
const { email, isGraduated, "jenis kelamin": gender, finals } = credential;
const [mtk, bing, bind, ipa] = finals;
// const {
//   email,
//   isGraduated,
//   "jenis kelamin": gender,
//   finals: [mtk, bing, bind, ipa],
// } = credential;
console.log(email, isGraduated, gender, ipa);
