const routes=require("express").Router()
const{insertUser,getUser,updateUser, deleteUser,registerUser}=require('../Assignment 5/controller')
routes.post("/insert-user",insertUser)
routes.get("/get-user",getUser)
routes.put("/update-user/:id",updateUser)
routes.delete("/delete-user/:name",deleteUser)
routes.post("/reg-user",registerUser)


module.exports=routes