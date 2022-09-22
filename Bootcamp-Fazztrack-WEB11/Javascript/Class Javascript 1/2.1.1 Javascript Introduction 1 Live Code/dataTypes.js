// number => angka
// operasi aritmatika
const umur = 21;
// console.log(umur * 2);

// typeof => melihat tipe data suatu variabel
// console.log(typeof umur);

// string => karakter a-zA-Z0-9 + simbol
const alamat = "Jl. Mentari II";
const email = "mail_private1@mail.co.kr";
// console.log(typeof email);
const umurString = "21";
// console.log(umur + umurString);
// penjumlahan matematika
// penjumlahan string => penggabungan string

// boolean
// true | false
const isGraduated = false;
// console.log(typeof isGraduated);

// function
// kumpulan kode
// ekspresi
// function namaFungsi(parameter/input){implementasi}
function cekOngkir(jarak) {
  if (jarak <= 2) return 5000;
  return (jarak - 2) * 3000 + 5000;
}
function totalHarga(pembelian = 10000, diskon, ongkir) {
  return pembelian - diskon + ongkir;
}
// console.log(totalHarga(undefined, 5000, cekOngkir(3)));
// function helloWorld() {
//   return "hello world";
// }
// function HelloWorld() {
//   console.log("Hello World");
// }
// HelloWorld();
// // console => print ke terminal
// // return => mengubah output fungsi
// console.log(helloWorld() + " arsyad");
// console.log(HelloWorld() + " arsyad");

// deklarasi
// tipeVariabel namaFungsi = function(parameter){implementasi}
const shipment = function (jarak) {
  if (jarak <= 2) return 5000;
  return (jarak - 2) * 3000 + 5000;
};
// console.log(shipment(3));

// arrow function (deklarasi)
// tipeVariabel namaFungsi = (parameter) => {implementasi}
const deliveryCost = (jarak) => {
  if (jarak <= 2) return 5000;
  return (jarak - 2) * 3000 + 5000;
};
// console.log(deliveryCost(3));
// implicit return
// syarat 1 baris dan langsung return
const greeting = (name) => "Hello " + name;
// console.log(greeting("fazz"));

// object
// array dan object
// kumpulan data yang saling berpasangan
// array => pasangan indeks dan value, urutan data signifikan
// object => pasangan key dan value, urutan data tidak signifikan
const hobbies = ["Reading", "Swimming", "Cooking"];
// console.log(hobbies[0]);
// console.log(hobbies[1]);
// console.log(hobbies[2]);
// {key: value, key: value}
const credential = {
  email: "fazz@mail.com",
  password: "track123",
  "jenis kelamin": "L",
  isGraduated: false,
  finals: [100, 90, 80, 90],
};
// console.log(typeof hobbies, typeof credential);
// object.key
// object[key] => biasa digunakan jika tidak bisa menggunakan yang atas, jika key dinamis
// console.log(credential.email);
// console.log(credential["email"]);
// console.log(credential["jenis kelamin"]);
// for (const key in credential) {
//   console.log(credential[key]);
// }
// console.log(credential.finals[0]);

// null => nilai tidak ada, terdefinisikan
// undefined => nilai tidak didefinisikan
