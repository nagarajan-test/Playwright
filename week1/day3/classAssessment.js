const browserVersion = 160

function getBrowserVersion(){
    var uname = "raja"
    let age= 20
    var ocupation = "QA"

    if (browserVersion >= 160){
        console.log("browser is chrome");
        console.log("inside block: ",uname , "is" , age ,"old" , "he is working as", ocupation );
        
        
    }else if(browserVersion < 140){
        console.log("browser is edge");

    }else if(browserVersion < 120){
        console.log("browser is firfox");

    }
    else{
        console.log("browser is undefined");
    }
        console.log("outside block: ",uname , "is" , age ,"old" , "he is working as", ocupation );

}
        // console.log("outside function: ",uname , "is" , age ,"old" , "he is working as", ocupation );

getBrowserVersion()