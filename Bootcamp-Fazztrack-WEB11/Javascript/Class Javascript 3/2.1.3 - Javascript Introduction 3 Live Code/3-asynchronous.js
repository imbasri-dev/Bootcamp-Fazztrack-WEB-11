// disclaimer: untuk mensimulasikan aksi asynchronous, akan digunakan timer (setTimeout)

const timer1 = () => {
  console.log("timer 1");
  setTimeout(function () {
    console.log(1);
  }, 1);
};
const timer2 = () => {
  console.log("timer 2");
  setTimeout(() => {
    console.log(50);
  }, 50);
};

console.log("start");
timer1();
console.log("next");
timer2();
console.log("finish");
