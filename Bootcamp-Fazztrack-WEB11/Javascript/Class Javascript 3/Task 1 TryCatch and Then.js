//
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
        }, 200);
    });
};

// menggunakan then catch
const data = cekHariKerja("senin")
    .then((cek) => {
        if (typeof cek !== "string") throw new Error("Hari harus String");
        return `${cek} Adalah hari Kerja.`;
    })
    .catch((err) => {
        return err.message;
    });
const cek = async () => {
    console.log(await data);
};
// cek(); //trigger func then catch

// menggunakan try catch
const hariKerja = async (day, callback) => {
    try {
        if (typeof callback !== "function") throw new Error("invalid param");
        if (typeof day !== "string") {
            throw new Error("hari harus menggunakan string");
        }
        const res = await callback(day);
        return `${res} adalah hari kerja, semangat!`;
    } catch (error) {
        return error.message;
    }
};

// const call = async () => {
//     console.log(await hariKerja("senin", cekHariKerja));
// };
// call(); //trigger func async await
