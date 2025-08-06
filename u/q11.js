function factorial(n) {
    let result = 1;
    for (let r = 1; r <=n; r++){
        result *= r;
    }
    return result;
}
let number = 5;
let result = factorial(number);
console.log(result);
