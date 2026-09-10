function launchBrowser(browserName){
    if (browserName=="Chrome"){
        console.log("browser is chrome");
    }
    else{
        console.log("browser is edge");
    }
}
launchBrowser("Chrome")
launchBrowser("edge")

function runTest(testType="smoke"){
    switch(testType)
    {
        case "sanity":
            console.log("sanity test ");
            break;
        case "Regression":
            console.log("regression  ");
            break;
        case "smoke":
            console.log("smoke test ")
            break;
    }
}
runTest("sanity")
runTest()