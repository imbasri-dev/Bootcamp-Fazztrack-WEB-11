// Promise => Janjian
// disclaimer: simulasi asynchronous menggunakan timer

/** syntax
 *  new Promise(function(resolve, reject){
 *      implementasi
 *      jika berhasil, maka gunakan resolve
 *      jika gagal, maka gunakan reject
 *  })
 */

const vacation = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("promise start");
        const isRaining = true;
        if (isRaining)
            return reject(new Error("Jalan-jalan dibatalkan karena hujan"));
        return resolve({
            date: new Date().getDay,
            destination: "Taman Mini",
        });
    }, 2000);
});

// console.log("promise start");
const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
vacation
    .then((objVacation) => {
        const { destination, date } = objVacation;
        console.log(
            `Jalan-jalan ke ${destination} pada hari ${days[date.getDay()]}`
        );
        console.log("promise end");
    })
    .catch((err) => {
        console.log(err.message);
        console.log("promise end");
    });
// console.log("promise end");
