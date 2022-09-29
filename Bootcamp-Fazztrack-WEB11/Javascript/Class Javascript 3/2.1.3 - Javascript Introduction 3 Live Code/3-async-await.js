// disclaimer: simulasi asynchronous menggunakan timer

const loginAPI = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const requestBody = {
                email, // email: email === email
                password,
            };
            const validUser = [
                { email: "mail@mail.com", password: "12345" },
                { email: "fazz@track.com", password: "qwerty" },
            ];
            for (let user of validUser) {
                if (
                    user.email === requestBody.email &&
                    user.password === requestBody.password
                ) {
                    return resolve(user);
                }
            }
            return reject(new Error("Invalid email/password"));
        }, 300);
    });
};
console.log("mulai");
async function doLoginAsync(email, password, loginFunc) {
    try {
        if (typeof loginFunc !== "function") throw new Error("invalid param");
        // asynchronous / promise
        const response = await loginFunc(email, password);
        // karena ada await, maka ditunggu
        const welcomeString = `Selamat Datang user ${response.email}`;
        return welcomeString;
    } catch (error) {
        // handling error
        return error.message;
    }
}
console.log("end");
const doAsync = async () => {
    console.log(await doLoginAsync("mail@mail.com", "12345", loginAPI));
};
doAsync();
