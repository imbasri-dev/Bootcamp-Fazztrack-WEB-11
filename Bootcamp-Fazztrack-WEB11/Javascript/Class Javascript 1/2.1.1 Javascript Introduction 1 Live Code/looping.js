// for (let i = 2; i < 10; i = i + 2) {
//   console.log(i);
// }
let fibo = [1, 1];
for (let i = fibo.length - 1; i < 10; i++) {
  fibo[i + 1] = fibo[i] + fibo[i - 1];
}
// console.log(fibo);

let number = 1;
while (number <= 0) {
  if (number % 15 === 0) {
    console.log("fazztrack");
    number++;
    continue;
  }
  if (number % 3 === 0) {
    console.log("fazz");
    number++;
    continue;
  }
  if (number % 5 === 0) {
    console.log("track");
    number++;
    continue;
  }
  console.log(number);
  number++;
}
do {
  if (number % 15 === 0) {
    console.log("fazztrack");
    number++;
    continue;
  }
  if (number % 3 === 0) {
    console.log("fazz");
    number++;
    continue;
  }
  if (number % 5 === 0) {
    console.log("track");
    number++;
    continue;
  }
  console.log(number);
  number++;
} while (number <= 0);
