const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = [
            "January",
            "Febuary",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];
        if (!error) {
            callback(null, month);
        } else {
            callback(new Error("Sorry Data Not Found"), []);
        }
    }, 4000);
};
const showMonth = (type, month) => {
    // untuk type parameter kalau bisa sesuaikan output ya, yaitu error
    if (type == null) {
        // evaluasi kalau bisa pakai truhty / falsy
        month.map((el) => {
            console.log(el);
        });
        return;
    }
    console.log(`${type.message},`, month);
};
getMonth(showMonth);
// cetak output semua bulan dengan method map jika tidak error, jika error cetak error messagenya
