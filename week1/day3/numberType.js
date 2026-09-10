function checkNumberType(num){
    if (num > 0){
        console.log(num," is positive number")
    }
    else if (num < 0){
        console.log(num," is negative number")
    }
    else{
        console.log(num," is 0")
    }
}
checkNumberType(10)
checkNumberType(-10)
checkNumberType(0)