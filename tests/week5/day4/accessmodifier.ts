
export class Calculator {

    public add(a: number, b: number) {
        return a + b;
    }

    private sub(a: number, b: number) {
        return a - b;
    }

    protected mul(a: number, b: number) {
        return a * b;
    }
}

const calc = new Calculator();

console.log(calc.add(10, 5)); // ✅ 15

// console.log(calc.sub(10, 5)); // Error
// console.log(calc.mul(10, 5)); // Error