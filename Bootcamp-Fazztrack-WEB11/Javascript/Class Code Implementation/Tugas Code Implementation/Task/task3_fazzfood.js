// FazzFood(harga, voucher, jarak, pajak)
/*
Example :
Input : FazzFood(75000, ‘FAZZFOOD50’, 5, true)
Output : Harga : 75000
Potongan : 37500
Biaya Antar : 14000
Pajak : 3750
SubTotal : 55250
 */

const fazzFood = (harga, voucher, jarak, pajak) => {
    if (typeof harga !== "number") return "input harga harus number";
    if (typeof voucher !== "string") return "input voucher harus string";
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
    if (jarak >= 2) {
        return 5000 + (jarak - 2) * 3000;
    }
    return 5000;
};
const discount = (harga, voucher) => {
    let hargaPotong = 0;
    if (voucher !== "") {
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
    return (harga = 0);
};
console.log(fazzFood(75000, "FAZZFOOD50", 5, true));
