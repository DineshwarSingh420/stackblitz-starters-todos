import mongoose, { mongo } from "mongoose"

const todoSchema= new mongoose.Schema(
  {
    content:{
      type:String,
      required:true
    },
    complete:{
      type:Boolean,
      default:false
    },
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    subTodos:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Subtodo"
      }
    ] //Array of subtodos...
}
,
  
  {timestamps:true}
  
  )

export const Todo=mongoose.model("todo", todoSchema) //todo is the model name