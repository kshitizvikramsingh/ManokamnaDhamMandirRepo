const express=require("express")
const path=require("path")
const ejs=require("ejs")


const app=express()

console.log(path.join(__dirname))

const views= path.join(__dirname,"/views")
const public=path.join(__dirname,"/public")


app.set('view engine', 'ejs')
app.set('views',views)
app.use(express.static(public))



app.get("/",(req,res)=>{
    res.render("homepage.ejs")
})






app.listen("80",()=>{
    console.log("App now listeninig on port 80")
})


