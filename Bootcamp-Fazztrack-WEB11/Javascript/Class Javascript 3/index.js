function first() {
    console.log("first");
}
function second() {
    console.log("second");
}
let interval = async () => {
    await setInterval(first, 2000);
    await setInterval(second, 1000);
};
interval();
