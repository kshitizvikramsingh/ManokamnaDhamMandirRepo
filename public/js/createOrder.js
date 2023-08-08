
console.log("create order script running")

const h1=document.getElementById("inputGroup-sizing-lg")


let instance = new Razorpay({
    key_id: 'rzp_test_YkbzFm5gIRu8c3',
    key_secret: 'IhtX2KtNgt0nCPZITlrRnz4K',
  });


let options = {
amount: h1.textContent,  // amount in the smallest currency unit
currency: "INR",
receipt: "order_receipt"
};
instance.orders.create(options, function(err, order) {
console.log(order);
})

