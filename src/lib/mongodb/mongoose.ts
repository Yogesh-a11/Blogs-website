import mongoose from "mongoose";


let initialized = false;

export const connectDB = async () => {
    mongoose.set("strictQuery", true);
    if (initialized) { 
        console.log("DB already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI as string ,{
            dbName: 'next-blog',
        })
        console.log("DB connected");
        initialized = true;
    } catch (error) {
        console.log("DB connection error", error);
    }
}