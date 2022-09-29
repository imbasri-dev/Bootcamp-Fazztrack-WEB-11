// penulisan method
// 1. ekspresi (yang digunakan ketika membutuhkan key lain didalam object yang bersangkutan)
// 2. arrow func
this.mtk = 100;
const averageCb = (...score) => {
  let sum = 0;
  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  return sum / score.length;
};
const testScore = {
  mtk: 80,
  ing: 45,
  ind: 100,
  ipa: 85,
  totalEks: function (cb) {
    // const { mtk, ing, ind, ipa } = this;
    // return mtk + ing + ind + ipa;
    return cb(this.mtk, this.ing, this.ind, this.ipa);
  },
  arrow: {
    totalArrow: () => {
      return this.mtk;
    },
  },
};

console.log(testScore.totalEks(averageCb));
console.log(testScore.arrow.totalArrow());
