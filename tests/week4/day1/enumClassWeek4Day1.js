var Environment;
(function (Environment) {
    Environment[Environment["Local"] = 0] = "Local";
    Environment[Environment["Development"] = 1] = "Development";
    Environment[Environment["Staging"] = 2] = "Staging";
    Environment[Environment["Production"] = 3] = "Production";
})(Environment || (Environment = {}));
function runTests(environment) {
    console.log(Environment[environment], " is running");
}
runTests(Environment.Local);
