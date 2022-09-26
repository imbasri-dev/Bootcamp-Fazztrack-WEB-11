/*

Task 1 Buat dan jelaskanlah 5 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya

dengan format :
// nama method
// mutable / imutable
// deksripsi
// contoh fungsi


Task 2 Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan
callback function dengan data sebagai berikut:
const name = [
‘Abigail’, ‘Alexandra’, ‘Alison’,
‘Amanda’, ‘Angela’, ’Bella’,
‘Carol’, ‘Caroline’, ‘Carolyn’,
‘Deirdre’, ‘Diana’, ‘Elizabeth’,
‘Ella’, ‘Faith’, ‘Olivia’, ‘Penelope’]

Contoh:
searchName(“an”, 3, callback)

Output:
[“Alexandra”,”Amanda”,”Angela”]
*/
const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanada",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Olivia",
    "Penelope",
];
// let animal = ["ayam", "singa", "cacing", "kucing"];
const data1 = 10;
const toLower = (data) => {
    // validasi
    if (typeof data !== "object") return "data bukan object / array";
    data = data.map((item) => item.toLowerCase());
    return data;
};

// console.log(toLower(data1));
const searchName = (string, dataTo, callback) => {
    // validasi
    if (typeof string !== "string") return "input harus string!";
    if (typeof dataTo !== "number") return "dataTo harus number!";
    if (dataTo <= 0) return "input harus lebih dari 0";
    let dataTemp = [];
    for (const str of callback) {
        // console.log(str) nilai dari semua element.
        // console.log(str.indexOf(string));
        //jika nilai tidak ada maka return  -1, default 0 sampai nemu index array ya.
        if (str.indexOf(string) >= 0) {
            // console.log(str.indexOf("an")); //mengambil nilai dari kondisi indexof
            if (dataTemp.length < dataTo) {
                // console.log(dataTemp.length);
                dataTemp.push(
                    str.substring(0).replace(str[0], str[0].toUpperCase())
                );
                //subString mengambil bagian string dari index awal
                // console.log(dataTemp.length);
            }
        }
    }
    // console.log(dataTo);
    // console.log(dataTemp.length);
    if (dataTo !== dataTemp.length) {
        return `Data yang dicari melebihi sampai ${dataTemp.length}`;
    }
    return dataTemp;
};
console.log(searchName("an", 4, toLower(name)));

// const searchName = (name, string) =!== {
//     let strToLower = name.map((item) => item.toLowerCase());
//     let dataTemp = [];
//     for (const str of strToLower) {
//         // console.log(str.indexOf("an"));
//         if (str.indexOf(string) >= 0) {
//             dataTemp.push(str.substring(0));
//             // console.log(str.substring(0));
//         }
//         // console.log(str.substring(0));
//     }
//     // console.log(dataTemp);
//     return dataTemp;
// };
// searchName(name);
// console.log(searchName(name, "el"));
/*
Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array).
Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir,
mengurutkan hasil pencarian dan menampilkannya ke layar/console.

Contoh:
SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])

Output: [8, 14, 17]


SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])

Output:
“Nilai akhir harus lebih besar dari nilai awal”


SeleksiNilai(4, 17 , [2, 25, 4])

Output:
“Jumlah angka dalam dataArray harus lebih dari 5”

 */

/*

Fungsi panggilan balik adalah fungsi yang diteruskan ke fungsi lain sebagai argumen, yang kemudian
dipanggil di dalam fungsi luar untuk menyelesaikan beberapa jenis rutinitas atau tindakan.
function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
*/
