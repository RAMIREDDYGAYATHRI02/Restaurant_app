import mongoose from "mongoose";

 export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://Gayathri:Gayathri02@cluster0.e7drzgg.mongodb.net/RestDB').then(
        ()=>{
            console.log("DB Connected")
        }
    )
}