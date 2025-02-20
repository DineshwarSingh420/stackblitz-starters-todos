import mongoose from "mongoose"

const subtodoSchema= new mongoose.Schema(
  { content:
    {
      type:string,
      required:true
    },
    complete:
    {
      type:Boolean,
      default:false
    },
    createdBy:
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
    }

  },

  {timestamps:true})

export const subtodo= mongoose.model("Subtodo", subtodoSchema)