import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("MongoDB Connected:" + conn.connection.host);
  } catch (error) {
    console.log("Error connection to mongoDB: " + error.message);
    process.exit(1); // 1 means there was an error, 0 means success
  }
};
