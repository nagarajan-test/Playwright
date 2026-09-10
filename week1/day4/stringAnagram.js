let str = "this is smoke test"

function returnLastWordLength(){
    let strArr =[]
    if(str.length > 0){
        strArr = str.split(" ");
        console.log(strArr[strArr.length-1].length );
    }
}
returnLastWordLength()