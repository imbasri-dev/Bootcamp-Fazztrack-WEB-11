/*
Mengubah Huruf Konsonan Diberikan sebuah teks, ubah huruf konsonan a menjadi o dari suatu teks.
Misalnya kalimat “Jakarta”, output “Jokorto”
Example :Input : changeText(‘Jakarta’) Output : Jokorto
*/
const changeText = (input) => {
    if (typeof input !== "string" || input === "")
        return "Input String serta isikan kata/kalimat.";
    let temp = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "a") {
            temp += "o";
            // <= bisa menggunakan continue untuk memberhentikan proses dan melanjutkan loopingnya.
        } else {
            temp += input[i];
        }
    }
    return ` hasil: input ${input}, output ${temp} .`;
};
console.log(changeText("Jakarta"));
