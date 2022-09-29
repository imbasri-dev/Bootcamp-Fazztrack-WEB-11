// method bawaan js
// sort => mengurutkan data
const arrOfNum = [3.12, 3.11, 3.1];
// arrOfNum.sort();
arrOfNum.sort((a, b) => {
  return b - a;
});
// console.log(arrOfNum);

const height = [160, 161, 162];
height.reverse();
// console.log(height);
const abjad = ["a", "b", "c"];
abjad.reverse();
// console.log(abjad);

const drink = ["teh", "kopi", "susu", "wedang", "soda"];
for (let i = 0; i < Math.floor(drink.length / 2); i++) {
  //   let temp = drink[i];
  //   drink[i] = drink[drink.length - 1 - i];
  //   drink[drink.length - 1 - i] = temp;
  [drink[i], drink[drink.length - 1 - i]] = [
    drink[drink.length - 1 - i],
    drink[i],
  ];
  // [a,b] = [b,a]
}
// console.log(drink);

// array map
// method yang digunakan untuk menjalankan suatu cb untuk setiap elemen array

const scores = [80, 70, 50, 100];
const isLulus = (el) => {
  if (el >= 75) return "lulus";
  return "tidak lulus";
};
const result = scores.map(isLulus);
// console.log(scores);
// console.log(result);

// array filter
// method yang digunakan untuk menyaring isi elemen
const filteredResult = scores.filter((el) => (el >= 75 ? true : false));
// console.log(scores);
// console.log(filteredResult);

// string split
// method yang digunakan untuk memisahkan string menjadi beberapa bagian
const str = "Saya orang Indonesia";
const arrOfStr = str.split(" ");
// console.log(str);
// console.log(arrOfStr);

// array join
// method yang digunakan untuk menggabungkan semua elemen array menjadi satu
const joinedString = arrOfStr.join(" ");
// console.log(joinedString);
