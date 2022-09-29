// Promise janjian main bareng game
//================Then Catch======================
const mainBareng = (goodNetwork) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (goodNetwork) {
                return resolve({
                    network: "4G",
                    message: "Gas jadi mabar!",
                });
            }
            return reject(new Error("Jaringan buruk/lag bro, gak bisa mabar"));
        }, 1000);
    });
};

//================Then Catch======================
const play = (goodNetwork) => {
    if (typeof goodNetwork !== "boolean")
        throw new Error("Input true / false ( ya / tidak )");
    mainBareng(goodNetwork)
        .then((objNetwork) => {
            const { network, message } = objNetwork;
            console.log(`Jaringan ${network} Ok , ${message}`);
        })
        .catch((error) => {
            console.log(error.message);
        });
};
play(false);
//================Try Catch======================
const janjiNgopi = (loveCoffee) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!loveCoffee) {
                return reject(new Error("Maap saya tidak suka Ngopi"));
            }
            const jadwal = {
                destination: "Warung Bu Yuli",
                date: new Date().getDay(),
                hour: new Date().getHours(),
            };
            return resolve(jadwal);
        }, 2000);
    });
};
const jadwalNgopi = async (loveCoffee) => {
    const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
    ];
    try {
        if (typeof loveCoffee !== "boolean")
            throw new Error("isikan janji true / false");
        const respone = await janjiNgopi(loveCoffee);
        let { date, destination, hour } = respone;
        return `Gas bro hari ${days[date]}, jam ${
            hour + 2
        }.00 WIB. di tempat ${destination} `;
    } catch (err) {
        return err.message;
    }
};
const ngopiCuy = async (loveCoffee) => {
    console.log(await jadwalNgopi(loveCoffee));
};
ngopiCuy(true); //trigger function
