import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import delleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/delle", delleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from AI");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(8080, () => console.log("Server is starting on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
