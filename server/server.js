import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import { clerkWebhooks, stripeWebhooks } from "./controllers/webhooks.js";
import educatorRouter from "./routes/educatorRoutes.js";
import { clerkMiddleware } from "@clerk/express";
import connectCloudinary from "./config/cloudinary.js";
import courseRouter from "./routes/courseRoutes.js";
import userRouter from "./routes/userRoutes.js";

// Initilaize Express
const app = express();

// Connect to Db
await connectDb();
await connectCloudinary();

// middleware
app.use(cors());
app.use(clerkMiddleware());

// route
app.get("/", (req, res) => res.send("Api working"));
// ⚠️ RAW BODY for Clerk webhook
app.post("/clerk", express.raw({ type: "application/json" }), clerkWebhooks);

app.use("/api/educator", express.json(), educatorRouter);
app.use("/api/course", express.json(), courseRouter);
app.use("/api/user", express.json(), userRouter);

app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
