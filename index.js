function palindrome(str) {
    let exp = /[\W_]/g;
    let lowC = str.toLowerCase().replace(exp, "");
    let reversed = lowC.split("").reverse().join("");
    if (reversed === lowC) {
        return true;
    } else {
        return false;
    }
}  
console.log(palindrome("eye345*"));