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
*/
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArr) => {
    if (typeof nilaiAwal !== "number" || typeof nilaiAkhir !== "number")
        return "nilai awal dan Akhir harus Number!";
    if (nilaiAwal > nilaiAkhir)
        return "nilai akhir harus lebih besar dari nilai awal";
    if (dataArr.length <= 5) return "Jumlah data harus lebih dari 5";
    const result = dataArr.filter((num) => num > nilaiAwal && num < nilaiAkhir);
    // return result.sort((a, b) => a - b);
    return result.sort((a, b) => {
        return a - b;
    });
};
console.log(seleksiNilai(1, 15, [1, 2, 5, 6, 5, 11, 8, 10, 15, 20]));
console.log(seleksiNilai(5, 1, [1, 2, 5, 6, 5, 11, 8, 10, 15, 20]));
console.log(seleksiNilai(1, 15, [1, 2, 5, 6, 5]));
