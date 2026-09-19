function facotial(num: number) {
    let ans: number = 1
    for (let i = 1; i <= num; i++) {

        ans = ans * i
    }
    console.log(ans)

}
facotial(5)

function fibonaci(num: number) {
    let firstNum = 0
    let secondNum = 1
    for (let i: number = 0; i < num; i++) {
        console.log(firstNum)
        let nextnum = firstNum + secondNum
        firstNum = secondNum
        secondNum = nextnum
    }

}
fibonaci(6)
