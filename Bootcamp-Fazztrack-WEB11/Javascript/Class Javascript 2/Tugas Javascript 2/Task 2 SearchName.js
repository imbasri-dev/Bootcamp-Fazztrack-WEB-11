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
const toLower = (data) => {
    data = data.map((item) => item.toLowerCase());
    return data;
};
// console.log(toLower(toLower(data1)));
const searchName = (string, dataTo, callback) => {
    // validasi
    if (typeof string !== "string") return "input harus string!";
    if (typeof dataTo !== "number") return "dataTo harus number!";
    if (typeof callback !== "function") return "callback not function!";
    if (dataTo <= 0) return "input harus lebih dari 0";
    let dataTemp = [];
    for (const str of callback(name)) {
        // console.log(str) //nilai dari semua element.
        // disini validasi limit untuk revisi data yang dicari
        // console.log(str.indexOf(string));
        // jika nilai tidak ada maka return  -1, default 0 sampai nemu index array ya.
        if (str.indexOf(string) >= 0) {
            // console.log(str.indexOf(string)); //mengambil nilai dari kondisi indexof
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

    if (dataTo !== dataTemp.length) {
        // console.log(dataTo);
        // console.log(dataTemp.length);
        return `Error data yang dicari melebihi sampai ${dataTemp.length}.`;
    }

    return dataTemp;
};
console.log(searchName("an", 2, toLower));
// batasan tidak lebih dari nilai
