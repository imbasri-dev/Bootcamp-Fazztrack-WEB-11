// cekPalindrom
const cekPalindrom = (str) => {
    if (typeof str !== "string" || str === "")
        return "Input String serta isikan kata.";
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return "Bukan Palindrome";
        }
        return "Palindrome";
    }
};
console.log(cekPalindrom("oppo"));
console.log(cekPalindrom("bapak"));
