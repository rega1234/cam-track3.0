import mongoose from "mongoose";


export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/Cam-trackDB');  
        console.log("DB is connected :D")
    }catch (error) {
        console.log(error);
    }
};