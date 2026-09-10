function checkAnagram(str1,str2){
    // console.log(str1,'\t',str2);
    if(str1.length != str2.length){
        console.log("not anagram");
        return 0
    }else if(str1.split("").sort().join("") === str2.split("").sort().join(""))
        {
            console.log("It is Anagram");
            
        }else console.log("not anagram");
        

    
}

checkAnagram('hello','world')
checkAnagram('mother','themor')