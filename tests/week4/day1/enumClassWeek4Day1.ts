enum Environment {
    Local,
    Development,
    Staging,
    Production
}

function runTests(environment: Environment): void {
    console.log(Environment[environment], " is running")
}
runTests(Environment.Local)