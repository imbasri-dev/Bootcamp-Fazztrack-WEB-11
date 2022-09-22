// variabel
// Deklarasi
// Membuat variabel
// var
var nama;
// let
let isGraduated;
// const
// const umur

// Assignment & re-Assigment
// Memasukkan nilai
nama = "fazz";
isGraduated = true;
// umur = 21;

// khusus untuk const, deklarasi dan assignment harus digabung
const umur = 21;
// console.log(nama, isGraduated, umur);

nama = "track";
isGraduated = false;
// umur = 20;
// const tidak bisa di reassign
// console.log(nama, isGraduated, umur);

// Scope
// ruang dimana suatu variabel dapat dipanggil/digunakan
// var car = "toyota"; // global scope
function printCar() {
  car = "volvo"; // local scope
  console.log(car);
}
// printCar();
// console.log(car);

// Hoisting
// memindahkan baris deklarasi ke bagian atas scope
console.log(isHoisted);
// const isHoisted = true;
// const tidak dapat di hoisting
// let isHoisted = true;
// let tidak dapat di hoisting
var isHoisted = true;
// var isHoisted
// isHoisted = true
// var bisa di hoisting
