/*
Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data  sebagai berikut:
name (string)
age(number)
hobbies (array)
IsMarried (boolean)
schoolList (Array of Object) with key name, yearIn, yearOut, and major (if any, if no set “null” )
skills (Array of Obj) with key skillName and level (beginner, advanced, expert)
interestInCoding (Boolean)
*/

const biodata = {
    name: "Imam Basri",
    age: 26,
    hobbies: ["nonton film", "game", "coding"],
    isMarried: false,
    schoolList: [
        {
            name: "SDN 17 Pagi Cakung Barat",
            yearsIn: 2002,
            yearsOut: 2008,
            major: null,
        },
        {
            name: "SMPN 144 Cakung Barat",
            yearsIn: 2008,
            yearsOut: 2011,
            major: null,
        },
        {
            name: "SMKN 4 Jakarta",
            yearsIn: 2011,
            yearsOut: 2014,
            major: "Teknik Audio Video",
        },
    ],
    skills: [
        { skillName: "HTML AND CSS", level: "advanced" },
        { skillName: "Javascript", level: "beginner" },
    ],
    interestInCoding: true,
};
