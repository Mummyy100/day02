function countVowels(str){
    const vowels = 'aeiouAeiou';
        let count = 0;
    for (let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels("welcome to my codes."));