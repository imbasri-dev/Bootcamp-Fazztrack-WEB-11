/*
Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” yg berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka

Contoh:
const printSegitiga = 5

Output:
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

*/

const printSegitiga = (number) => {
    if (typeof number === "number") {
        for (let i = 1; i <= number; i++) {
            let numbers = "";
            for (let j = number; j >= i; j--) {
                numbers += number - j + 1; //numbers disini adalah paramternya.
                numbers += " ";
            }
            console.log(numbers);
        }
    } else {
        console.log("masukan tipe number dengan benar!");
    }
};
printSegitiga(5);
