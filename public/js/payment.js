console.log("script is loaded")
const h3=document.getElementById("orderID")
const amt=document.getElementById("amt")






let options1 = {
    "key": "rzp_test_YkbzFm5gIRu8c3", // Enter the Key ID generated from the Dashboard
    "amount": amt.textContent, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Monakamna Dham Mandir",
    "description": "Test Transaction",
    "image": "/img/Manokamna_Dham_Mandir (1).jpeg",
    "order_id": h3.textContent, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "/success",
    "prefill": {
        "name": "Sample Name needs to be filled",
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
    },
    "notes": {
        "address": "Manokamna Dham Mandir"
    },
    "theme": {
        "color": "#3399cc"
    }
};
let rzp1 = new Razorpay(options1);
document.getElementById('button').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}