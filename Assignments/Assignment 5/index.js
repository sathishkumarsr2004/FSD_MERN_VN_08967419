// [{
//   "name":"sk",
//   "age":21,
//   "email":"sathish123@gmail.com",
//   "password":"SATHISH"
// },
//   {
//   "name":"sks",
//   "age":22,
//   "email":"sat123@gmail.com",
//   "password":"SAt"
// }]
const express=require('express')
const mongoose =require('mongoose')
const app=express()
const routes=require('./routes')
const port =8000
mongoose.connect("mongodb+srv://Sathishkumar:8148604480@cluster0.ori2diu.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>{
    console.log(err)
})
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello")
}),
app.use(routes)
app.listen(8000,()=>{
 console.log(`server running at http://localhost:${port}`)
})