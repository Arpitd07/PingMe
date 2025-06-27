import mongoose from "mongoose";

// Function to connect to database
export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', ()=> console.log('Database Connected'));

        await mongoose.connect(`${process.env.MONGODB_URI}/PingMe`)
    } catch (error) {
        console.log(error)
    }
}