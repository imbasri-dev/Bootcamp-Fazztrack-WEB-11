const fazzFood = (harga, voucher, jarak, pajak) => {
    if (typeof harga !== "number") return "input harga harus number";
    if (typeof voucher === "null" || voucher === "string")
        return "input voucher harus string"; //<== harus diberi kondisi null
    if (typeof jarak !== "number") return "input jarak harus number";
    if (typeof pajak !== "boolean") return "input pajak harus boolean";
    const disc = discount(harga, voucher);
    const km = disctance(jarak);
    const tax = harga * 0.05;
    if (typeof disc === "string") return disc;
    if (pajak) {
        return `
harga ${harga}
Potongan: ${disc}
Biaya Antar: ${km}
Pajak: ${tax}
SubTotal: ${harga - disc + km + tax}`;
    }
    return `
harga ${harga}
Potongan: ${disc}
Biaya Antar: ${km}
SubTotal: ${harga - disc + km}`;
};
//
const disctance = (jarak) => {
    if (jarak > 2) {
        return 5000 + (jarak - 2) * 3000;
    }
    return 5000;
};
const discount = (harga, voucher) => {
    let hargaPotong = 0;
    if (voucher === null || voucher !== "") {
        if (voucher == "FAZZFOOD50") {
            if (harga < 50000)
                return "Voucher tidak dapat digunakan minimal pembayaran Rp.50000";
            hargaPotong = harga * 0.5;
            if (hargaPotong < 50000) return hargaPotong;
            return 50000;
        }
        if (voucher == "FAZZFOOD60") {
            if (harga < 25000)
                return "Voucher tidak dapat digunakan minimal pembayaran Rp.25000";
            hargaPotong = harga * 0.6;
            if (hargaPotong < 30000) return hargaPotong;
            return 30000;
        }
    }
    return hargaPotong;
};
console.log(fazzFood(50000, null, 5, true));
// console.log("==================");
// console.log(fazzFood(75000, "FAZZFOOD50", 5, true));
// console.log("==================");
// console.log(fazzFood(75000, "", 5, true));
// console.log("==================");
// console.log(fazzFood(75000, "FAZZFOOD50", 5, false));
// console.log("==================");
// console.log(fazzFood(25000, "FAZZFOOD60", 2, false));

// evaluasi
// sebaikknya mengikuti soal jika tidak ada callback parameter  , maka buat saja kondisi didalam 1 function dan perbaiki flowcharts ya.
