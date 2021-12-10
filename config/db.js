import mongoose from "mongoose";

const mongooseConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(conn.connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default mongooseConnect;
