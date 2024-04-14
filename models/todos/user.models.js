import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  { //Data here
   username:{
     type:String,
     required:true,
     unique:true,
     lowercase:true
   },
   email:{
     type:String,
     required:true,
     unique:true,
     lowercase:true,
   },
   password:{
     type:String,
     required:[true, "password is required"],
    
   }
  }, 
  
  {timestamps:true}

); //object is {}

export const User = mongoose.mode('User', userSchema);
