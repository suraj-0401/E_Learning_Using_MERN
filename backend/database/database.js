import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const URL = 'mongodb+srv://shekharsuraj201:Suraj123@cluster0.cqj03.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connnectDb=mongoose.connect(URL)
.then(() => console.log('Successfully connected'))
.catch((error) => console.error('Error connecting to MongoDB Atlas:', error));
export default connnectDb;
