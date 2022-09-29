// fungsi akan berhenti jika habis atau bertemu return
// return => mengembalikan nilai (transformasi bentuk fungsi menjadi bentuk return)
// return => memberhentikan fungsi

const cekOngkir = (jarak) => {
  if (jarak <= 2) {
    console.log("inside if");
    return 5000;
    // jika jarak <=2
    // maka, fungsi akan diberhentikan
    // kemudian transformasi menjadi 5000
  }
  console.log("outside if");
  return (jarak - 2) * 3000 + 5000;
};
const ongkir = cekOngkir(2);
console.log(ongkir);
// console.log(cekOngkir(3));
// fungsi dijalankan
// bentuk fungsi => bentuk return

// memperpendek penggunaan if di fungsi
// meminimalisir penggunaan else
// if => pengondisian
// kondisi ? (true) : (false)
// 1. cari yang salah
// yang benar kan lanjut fungsinya
// kasus ini biasa ditemukan untuk validasi

const averageUN = (...score) => {
  for (let i = 0; i < score.length; i++) {
    if (typeof score[i] !== "number") return "Input bukan number";
    if (score[i] < 0 || score[i] > 100) return "Invalid range";
  }
  // logika
  let total = 0;
  for (let i = 0; i < score.length; i++) {
    total += score[i];
  }
  return total / score.length;
};

// console.log(averageUN(100, 65, 83, "0"));

const checkGrade = (mtk, eng, ind, ipa) => {
  // validasi tipe data
  if (
    typeof mtk !== "number" ||
    typeof eng !== "number" ||
    typeof ind !== "number" ||
    typeof ipa !== "number"
  ) {
    return "Input bukan number";
  }
  // validasi range 0 - 100
  if (
    mtk > 100 ||
    mtk < 0 ||
    eng > 100 ||
    eng < 0 ||
    ind > 100 ||
    ind < 0 ||
    ipa > 100 ||
    ipa < 0
  ) {
    return "Invalid range";
  }
};

// 2. jika hanya if else, maka ditiadakan else
const shiping = (distance) => {
  if (distance <= 2) return 5000;
  return (distance - 2) * 3000 + 5000;
};
