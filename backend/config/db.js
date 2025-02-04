import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://aquasupport:aquasupp@cluster0.yj6xd.mongodb.net/aquasupport?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));
};


