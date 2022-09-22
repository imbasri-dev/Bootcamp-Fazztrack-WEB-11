/*
Soal
Ubahlah data  tersebut menggunakan spread operator menjadi:
name: nama anda
email: email anda
hobby: hobi anda

Ambilah data “street dan city” tersebut menggunakan destructuring

*/
const data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};

const newData = {
    name: "Imam Basri",
    email: "imbasri.dev@gmail.com",
    hobby: ["coding", "nonton film", "ngopi"],
};

const result = { ...data, ...newData };
console.log(result);
// cara 1
const { address } = data;
const { street, city } = address;
console.log(`street :${street} city: ${city}`);

// cara 2
// const {
//     address: { street },
//     address: { city },
// } = data;
// console.log(`street :${street} city: ${city}`);
