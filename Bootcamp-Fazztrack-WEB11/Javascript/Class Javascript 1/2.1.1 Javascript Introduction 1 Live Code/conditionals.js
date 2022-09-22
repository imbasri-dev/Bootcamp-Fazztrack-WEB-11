// if - else
// if(kondisi){true}else{false}
const jarak = 2;
if (jarak <= 2) {
  console.log("ongkir =", 5000);
} else {
  console.log("ongkir =", (jarak - 2) * 3000 + 5000);
}

// switch - case
// switch(variabel yang dicek){case by case}
const jenisKelamin = "L";
switch (jenisKelamin) {
  case "L": // logika
    console.log("Selamat Datang Bapak");
    break;
  case "P": // logika
    console.log("Selamat Datang Ibu");
    break;
  default: // logika
    console.log("Data tidak lengkap");
    break;
}

// ternary op / short circuit logic
// shorthand if
// kondisi ? true : false
// kondisi 1 ? true 1 : kondisi 2 ? true 2 : false
jarak <= 2
  ? console.log("Ongkir =", 5000)
  : console.log("Ongkir =", (jarak - 2) * 3000 + 5000);

// tiket kereta
// L => 2000
// P => 1500
const hargaTiket = jenisKelamin == "L" ? 2000 : 1500;
// console.log(hargaTiket);
let ticketPrice;
if (jenisKelamin == "L") {
  ticketPrice = 2000;
} else {
  ticketPrice = 1500;
}
// console.log(ticketPrice);

const p = true;
const q = true;
// console.log(p && q);
// console.log(p || q);

function totalHarga(pembelian, diskon, ongkir) {
  if (
    typeof pembelian !== "number" ||
    typeof diskon !== "number" ||
    typeof ongkir !== "number"
  ) {
    return "Invalid";
  } else {
    return pembelian - diskon + ongkir;
  }
}
console.log(totalHarga());
