import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const URL=process.env.MONGO_URI;
const connnectDb=mongoose.connect(URL)
.then(() => console.log('Successfully connected'))
.catch((error) => console.error('Error connecting to MongoDB Atlas:', error));
export default connnectDb;
