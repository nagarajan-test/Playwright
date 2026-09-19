type paymentMethod = "upi" | "credit card" | "paypal"

function makePayment(payment: paymentMethod) {
    if (payment !== "credit card" && payment !== "upi" && payment !== "paypal") {
        throw new Error(`${payment} mode of payment not allowed`)
    }
    console.log(`this payement is successfully completed`)

}
makePayment("credit card")
// makePayment("cash")