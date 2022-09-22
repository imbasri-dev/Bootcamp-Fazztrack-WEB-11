const personalData = {
  name: "Fazztrack",
  age: 20,
  gender: "L",
};

// Halo, nama saya nama
// berumur umur tahun
// dengan jenis kelamin gender
console.log(
  "Halo, nama saya " +
    personalData.name +
    "\nberumur " +
    personalData.age +
    " tahun\ndengan jenis kelamin " +
    (personalData.gender === "L" ? "Laki-Laki" : "Perempuan")
);
console.log(
    `Halo, nama saya ${personalData.name}
berumur ${personalData.age} tahun
dengan jenis kelamin ${personalData.gender === "L" ? "Laki-Laki": "Perempuan"}`
)