import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGODB_URL as string);
    console.log(`MongoDB connected:${conn.connection.host}`);
  } catch (eeror) {
    console.error("Database Connection failed");
    process.exit(1);
  }
};
