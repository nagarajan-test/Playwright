function makePayment(payment) {
    if (payment !== "credit card" && payment !== "upi" && payment !== "paypal") {
        throw new Error("".concat(payment, " mode of payment not allowed"));
    }
    console.log("this payement is successfully completed");
}
makePayment("credit card");
// makePayment("cash")
