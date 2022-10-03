const divideSort = (nums) => {
    let result = nums
        .toString()
        .split(0)
        .map((el) => el.split("").sort().join(""))
        .join("");
    return parseInt(result);
    // return typeof parseInt(result); //parseInt untuk convert string menjadi number
};
console.log(divideSort(5956560159466056));
