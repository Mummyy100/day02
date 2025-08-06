let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let evenCount = 0;
numbers.forEach(num => {
    if (num % 2 === 0){
        evenCount++;
    }
})
console.log("Even numbers count:", evenCount)