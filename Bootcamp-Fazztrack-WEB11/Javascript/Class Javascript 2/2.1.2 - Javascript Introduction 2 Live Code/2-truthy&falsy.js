// truthy => nilai yang bernilai true secara implicit
// falsy => nilai yang bernilai false secara implicit
// contoh falsy value
// 0
// console.log(!!0);
// null
// console.log(!!null);
// undefined
// console.log(!!undefined);
// ""
// console.log(!!"");
// NaN
// console.log(!!NaN);

// biasa digunakan untuk mengganti logika
const number = 0.2;
function validation(value) {
  if (value) return value;
  return "invalid";
}
console.log(validation(number));
const averageUN = (...score) => {
  for (let i = 0; i < score.length; i++) {
    // console.log(score[i], !score[i], typeof score[i] !== "number");
    if (!score[i] && score[i] !== 0) return "Input bukan number";
    if (score[i] < 0 || score[i] > 100) return "Invalid range";
  }
  // logika
  let total = 0;
  for (let i = 0; i < score.length; i++) {
    total += score[i];
  }
  return total / score.length;
};
console.log(averageUN(100, 65, 83, 0));
