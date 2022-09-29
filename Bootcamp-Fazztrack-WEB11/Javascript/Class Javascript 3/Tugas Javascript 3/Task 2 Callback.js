const getMonth = (callback) => {
    setTimeout(() => {
        let error = true;
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
    }, 100);
};
const showMonth = (type, month) => {
    if (type == null) {
        month.map((el) => {
            console.log(el);
        });
    } else {
        return console.log(`${type.message},`, month);
    }
};
getMonth(showMonth);
// console.log(getMonth(showMonth));
