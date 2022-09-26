/*
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
        // console.log(str) //nilai dari semua element.
        // console.log(str.indexOf(string));
        //jika nilai tidak ada maka return  -1, default 0 sampai nemu index array ya.
        if (str.indexOf(string) >= 0) {
            console.log(str.indexOf(string)); //mengambil nilai dari kondisi indexof
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
console.log(searchName("an", 3, toLower(name)));
