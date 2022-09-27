/*
Task 1 Buat dan jelaskanlah 5 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya
dengan format :
// nama method
// mutable / imutable
// DESKRIPSI
// contoh fungsi
*/
/*
METHOD : concat()
TYPE immutable : Menggabungkan dua atau lebih array. Metode ini mengembalikan array baru tanpa mengubah array yang ada.
DESKRIPSI : method concat membuat array baru. Array pertama-tama akan diisi oleh elemen-elemen dalam array yang dipanggil.
Kemudian, untuk setiap argumen, nilainya akan digabungkan ke dalam array,
argumen itu sendiri akan menjadi elemen array terakhir mirip seperti menggunakan spread operator;
contoh concat :
*/
const foods = ["bakso", "nasi goreng", "nasi uduk"];
const drinks = ["kopi", "susu", "teh", "air"];
const menus = foods.concat(drinks);
console.log(foods);
console.log(drinks);
console.log(menus);

/*
METHOD : pop()
TYPE mutable : Metode pop adalah metode bermutasi / merubah. mengubah panjang dan konten ini.
DESKRIPSI : Menghapus elemen terakhir dari array dan mengembalikannya. Jika array kosong,
undefined.
contoh pop :
*/
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants);
console.log(plants.pop()); //walaupun dijalankan diconsole dia akan berubah ke proses selanjutnya / mutabke
plants.pop();
console.log(plants);

/*
METHOD : unshift()
TYPE mutable : Metode unshift adalah metode bermutasi / merubah. mengubah panjang dan konten ini.
DESKRIPSI : Menambah elemen terdepan dari array dan mengembalikannya ke panjang array yang baru.
contoh unshift :
*/
const angka = [1, 2, 3];
console.log(angka);
angka.unshift(4, 5);
console.log(angka);
let data = angka.unshift(4, 5);
console.log(data);
console.log(angka);

/*
METHOD : shift()
TYPE mutable : Metode shift adalah metode bermutasi / merubah. mengubah panjang dan konten ini.
DESKRIPSI : Menghapus elemen terdepan dari array dan mengembalikannya ke panjang array yang baru.
contoh shift :
*/
const dataShift = [1, 2, 3];
console.log(dataShift);
console.log(dataShift.shift());
console.log(dataShift);
const firstElement = dataShift.shift();
console.log("Data yang dihapus :", firstElement);
console.log(dataShift);

/*
METHOD : toString()
TYPE immutable : Metode toString adalah metode immutable /tidak merubah array yang sebelum digunakan method.
DESKRIPSI : mengubah value/nilai dari array menjadi type data String.
contoh toString :
*/
const arr = [1, 2, "a", "1a"];
arr.toString();
console.log(typeof arr[0]);
console.log(typeof arr[0].toString());
let arrString = arr.toString();
console.log(arrString);
console.log(typeof arrString[0]);
console.log(arr);
