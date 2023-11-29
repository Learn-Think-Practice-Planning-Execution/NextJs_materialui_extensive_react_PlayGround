import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(
      "mongodb+srv://nextJsPracticce:qwerty1234567890@nextjspractice.6ny4rif.mongodb.net/?retryWrites=true",
      {
        dbName: "nextjspractice",
      }
    );
    // const { connection } = await mongoose.connect("mongodb://localhost:27017", {
    //   dbName: "nextjspractice",
    // });
    console.log("databaseConnected", `${connection.host}`);
  } catch (error) {
    console.log("error", error);
  }
};

// mongodb+srv://<username>:<password>@nextjspractice.6ny4rif.mongodb.net/?retryWrites=true&w=majority
// nextJsPracticce
// qwerty1234567890
