const users=require("../Assignment 5/model")

const insertUser=async(req,res)=>{
        const user=await users.create(req.body)
        res.send({user})
}
const getUser=async(req,res)=>{
    const user=await users.find({name:"sk"})   
        // const user=await users.find({name:{ $in:["sk","sks"]}})
        // const user=await users.find({age:21})
        // const user=await users.findById("69143338b974cab4f2c6eda9")
        res.send({user})
}
const updateUser=async(req,res)=>{
        const id=req.params.id
        let user= await users.findByIdAndUpdate(id,req.body,{new:true})
        res.send({user})
}
const deleteUser=async(req,res)=>{
        const name=req.params.name;
        let user=await users.findOneAndDelete({name:name})
        res.send({user})}

 //register code
  const bcrypt =require("bcrypt")
 const registerUser = async (req, res) => {
         try {
           const {name,age,password,email}=req.body
           const pass=await bcrypt.hash(password, 10)
           const user =await users.findOne({email:email})
           if(user){
                // res.send({user})
                return res.status(200).json({msg:"user found",user})//
           }
           const details=await users.create({
                name,
                age,
                email,
               password:pass
           })
           res.status(200).json(details)//
        
        }
        catch (err) {
                console.log(err)
                res.status(500).send({msg:"internal server error"})
        }
        }
        module.exports = {insertUser,getUser,updateUser,deleteUser,registerUser};