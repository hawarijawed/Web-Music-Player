import mongoose, { mongo } from "mongoose";

const connectDB = async ()=>{
    mongoose.connection.on('connected', ()=>{
        console.log("Database Connection established !!!");
        
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/Music Player`);
}

export default connectDB;