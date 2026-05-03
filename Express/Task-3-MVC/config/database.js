import mongoose from "mongoose";

export async function connectDB() {

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected 👍")
    } catch (error) {
        console.log("Database connection failed ❌")
        process.exit(1)
    }
    
}