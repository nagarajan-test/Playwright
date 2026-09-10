// named function example
function userProfile(name){
    console.log("Hello,",name,"!");
}
userProfile("raja")



// arrow function that returns double
const double = (num)=>{
    return num*num
}
console.log(double(5));



// anonymous function
function isAnonymous(){
    setTimeout(()=>{
        console.log("This message is delayed by 2 seconds");
        
    },2000)
}
isAnonymous()
console.log("late")




// callBack function example
function getUserData(name,callBack){  
    console.log(name,"this is callback");
    callBack()
}
function callmeLater(name){ //callbackfunction
    setTimeout(()=>{
        console.log("Call Back Function");
        
    },3000)
    
}
getUserData("raja",callmeLater) // function passed as argument to another function, that is called by that function