const express=require("express")
const path=require("path")
const ejs=require("ejs")
const Razorpay=require("razorpay")

const app=express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

console.log(path.join(__dirname))

const views= path.join(__dirname,"/views")
const public=path.join(__dirname,"/public")


app.set('view engine', 'ejs')
app.set('views',views)
app.use(express.static(public))



app.get("/",(req,res)=>{
    res.render("homepage.ejs")
})

app.get("/donate",(req,res)=>{
    res.render("donate.ejs")
})

app.get("/payment",(req,res)=>{

    let instance = new Razorpay({
        key_id: 'rzp_test_YkbzFm5gIRu8c3',
        key_secret: 'IhtX2KtNgt0nCPZITlrRnz4K',
      });
    
    console.log(req.query.amt)
    let options = {
    amount: parseInt(Math.abs(req.query.amt)*100),  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_receipt"
    };
    instance.orders.create(options, function(err, order) {
        if(order){
            console.log(order);
            const orderID=order.id
            console.log(orderID)
            const amt=req.query.amt
            res.render("payment.ejs",{orderID,amt})
        }
        else if(err){
            const error=err
            res.render("payment.ejs",{error})
        }

    
    })

    
})


app.post("/success",(req,res)=>{
    const payID=req.body.razorpay_payment_id
    const paySign=req.body.razorpay_signature
    res.render("success",{payID,paySign})
  
    console.log()
    // console.log(res.body.razorpay_payment_id)
    // console.log(res.body.razorpay_order_id)
    // console.log(res.body.razorpay_signature)

})




app.listen("80",()=>{
    console.log("App now listeninig on port 80")
})


