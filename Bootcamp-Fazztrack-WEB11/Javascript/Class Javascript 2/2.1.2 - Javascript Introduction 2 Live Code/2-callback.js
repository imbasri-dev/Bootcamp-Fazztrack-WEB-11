// callback => gunakan nanti
// fungsi yang digunakan untuk mentransformasi setiap elemen pada array
// loop [] => transformasi setiap elemen dengan menggunakan cb
// kegunaan cb
// 1. kontrol sbg parameter
// 2. fleksibilitas fungsi

const transformArray = (originalArray, transformationFunction) => {
    // validasi
    if (typeof transformationFunction !== "function")
        return "invalid parameter";
    // logika
    const resultArray = [];
    for (let i = 0; i < originalArray.length; i++) {
        transformationFunction(resultArray, originalArray[i]);
    }
    return resultArray;
};

const ogArr = [1, 2, 3, 4];
const oddOrEven = (resultArr, el) => {
    if (el % 2 === 0) {
        resultArr.push("Even");
        return; // hanya untuk memberhentikan saja, karena tidak mengharapkan hasil
    }
    resultArr.push("Odd");
};
// const oddOrEven = 2;
const square = (resultArr, el) => {
    resultArr.push(el * el);
};

const newArr = transformArray(ogArr, oddOrEven);
// console.log(newArr);
const squaredArr = transformArray(ogArr, square);
// console.log(squaredArr);

// anonymous callback => fungsi cb tanpa nama
const timesTwo = transformArray(ogArr, function (resultArr, el) {
    resultArr.push(el * 2);
});
// console.log(timesTwo);

// fungsi yang digunakan untuk menghapus elemen array dengan kondisi tertentu
// loop [] => cek masing2 el dengan cb => jika cb return true maka el masukkan ke arr hasil

const filterArray = (originalArray, filterFunction) => {
    const resultArr = [];
    for (let i = 0; i < originalArray.length; i++) {
        if (filterFunction(originalArray[i]) === true)
            resultArr.push(originalArray[i]);
    }
    return resultArr;
};

const evenOnly = (el) => {
    if (el % 2 === 0) return true;
    return false;
};
const oddOnly = (el) => {
    if (el % 2 === 0) return false;
    return true;
};

console.log(filterArray(ogArr, evenOnly));
console.log(filterArray(ogArr, oddOnly));
