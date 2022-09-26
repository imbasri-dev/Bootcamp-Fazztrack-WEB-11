/*Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4 nilai yakni Bahasa indonesia, Bahasa Inggris Matematika dan IPA, yang di dalam program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
90 - 100 = A
80 - 89 = B
70 - 79 = C
60 - 69 = D
0 - 59 = E

Contoh:
const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa =  69

Output:
Rata-rata = 82
Grade = B

 */

const averageUN = (bahasaIndonesia, bahasaInggris, matematika, ipa) => {
    // console.log(rataRata);
    if (
        typeof bahasaIndonesia === "number" &&
        typeof bahasaInggris === "number" &&
        typeof matematika === "number" &&
        typeof ipa === "number"
    ) {
        let rataRata = (bahasaIndonesia + bahasaInggris + matematika + ipa) / 4;
        if (rataRata >= 90 && rataRata <= 100) {
            console.log(`Rata-rata = ${rataRata}`);
            console.log("Grade = A");
        } else if (rataRata >= 80 && rataRata < 90) {
            console.log(`Rata-rata = ${rataRata}`);
            console.log("Grade = B");
        } else if (rataRata >= 70 && rataRata < 80) {
            console.log(`Rata-rata = ${rataRata}`);
            console.log("Grade = C");
        } else if (rataRata >= 60 && rataRata < 70) {
            console.log(`Rata-rata = ${rataRata}`);
            console.log("Grade = D");
        } else {
            console.log(`Rata-rata = ${rataRata}`);
            console.log("Grade = E");
        }
    } else {
        console.log("Input Nilai Dengan Benar!");
    }
};
averageUN(80, 90, 89, 69); // trigger fcuntion averageUN
