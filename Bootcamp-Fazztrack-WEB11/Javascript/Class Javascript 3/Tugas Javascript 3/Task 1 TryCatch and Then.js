const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
            let cek = dataDay.find((item) => {
                return item === day;
            });
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error("Hari ini bukan hari kerja"));
            }
        }, 3000);
    });
};

// menggunakan then catch
const checkDay = (hari) => {
    // validasi
    if (typeof hari !== "string") return console.log("Input hanya String !");
    cekHariKerja(hari)
        // then => resolve / onfulfilled => jika terpenuhi maka akan mengambil hasil output pada promises resolve cek.
        .then((cek) => {
            console.log(`${cek} Adalah hari Kerja.`);
        })
        // catch => rejected / onrejected => jika tidak terpenuhi maka akan mengambil hasil output pada promises reject dan menampilkan errornya.
        .catch((err) => {
            console.log(err.message);
        });
};
/* saya membuat then catch dengan mendeklarasikan arrow function checkDay yang diberi input parameter hari
sebelum diterima inputnya ada validasi sederhana, kemudian memanggil function promises yang parameter diinput melalui
function checkDay , jika janji cekHariKerja diproses kalau terpenuhi atau resolve, maka callback resolve akan proses dan
pada then, yang menunggu hasil return cek yang masuk dan output melalui callback resolve, jika janji tidak terpenuhi maka akan
proses melalui callback reject dan diterima melalui catch untuk mendapatkan output error message nya.
 */

//untuk testing then catch
// const callDay = (hari) => checkDay(hari);
// callDay("senin"); // trigger func then catch

// menggunakan try catch
const hariKerja = async (day, callback) => {
    try {
        // validasi
        if (typeof callback !== "function") throw new Error("invalid param");
        if (typeof day !== "string")
            throw new Error("hari harus menggunakan string");
        const response = await callback(day);
        return `${response} adalah hari kerja, semangat!`;
    } catch (error) {
        return error.message;
    }
};

/* saya membuat deklarasi hariKerja arrow function yang menggunakan async dan menerima parameter (day,callback) serta try catch
untuk error handling promises , saya membuat validasi pada parameter (day,callback) jika error maka akan langsung throw / lempar
error dengan message tersebut, dan langsung berhentikan proses, jika tidak ada error maka saya membuat variabel response
yang berisi await callback day yang menunggu output dari proses promises cekHariKerja jika resolve maka block try akan output return response
dengan message tersebut,jika promises rejected maka akan diproses dicatch dengan parameter error , yang mereturn error messagenya.

*/
const call = async (hari) => {
    console.log(await hariKerja(hari, cekHariKerja));
};
call("senin"); //trigger func async await
