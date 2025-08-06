function sumOfArray(arr) {
    return arr.reduce((acc,num)=> acc + num, 0);
}
console.log(sumOfArray([8,2,4,6,5]));