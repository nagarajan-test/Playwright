function isPalindrome(str){
    let copyStr=""
    for(let i=str.length; i>=0;i--){
        copyStr += str.charAt(i)
    }
    if(str === copyStr)
    console.log("its a palindrome");
    else console.log("not a palindrome");
    
}
isPalindrome("madam")
isPalindrome("palindrome")
