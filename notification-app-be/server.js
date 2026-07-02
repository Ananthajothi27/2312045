import express from "express";
import cors from "cors";
import notificationRoutes from "./routes/notifications.js";
import { Log } from "../logging-middleware/logger.js";

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", async (req, res) => {

    await Log(
        "backend",
        "info",
        "route",
        "Backend server started"
    );

    res.json({
        success: true,
        message: "Notification Backend Running"
    });
});


app.use("/notifications", notificationRoutes);

const PORT = 5000;

app.listen(PORT, async () => {

    console.log(`Server running on http://localhost:${PORT}`);

    await Log(
        "backend",
        "info",
        "route",
        `Server started on port ${PORT}`
    );
});