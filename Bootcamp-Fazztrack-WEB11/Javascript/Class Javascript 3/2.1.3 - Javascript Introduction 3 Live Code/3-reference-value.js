// primitive type
// tipe data klasik (number, string, boolean)
// bersifat passing by value
// non-primitive type
// array, object
// bersifat passing by reference

// value = nilai dari suatu variabel
// reference = nilai memori dari suatu variabel

// console.log(6 === 6); // value === value
// console.log([1, 2] === [1, 2]); // ref === ref
const arrOfOdd = [1, 3, 5]; // 0x001
// const anotherArrOfOdd = [1, 3, 5]; // 0x002
const anotherArrOfOdd = arrOfOdd; // 0x001
// console.log(arrOfOdd === anotherArrOfOdd); // 0x001 === 0x002
anotherArrOfOdd.push(7);
// console.log(arrOfOdd);

function isArrayEqual(arrA, arrB) {
  let isArrayEqual = true;
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      isArrayEqual = false;
      break;
    }
  }
  return isArrayEqual;
}

const fruits = ["melon", "semangka", "pisang"];
// const anotherFruits = fruits
const anotherFruits = [...fruits];
fruits.splice(1, 2, "apel", "mangga");
console.log(fruits);
console.log(anotherFruits);
