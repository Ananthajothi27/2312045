import notifications from "../utils/sampleData.js";
import { Log } from "../../logging-middleware/logger.js";


export const getNotifications = async (req, res) => {
    try {

        await Log(
            "backend",
            "info",
            "controller",
            "Fetching all notifications"
        );

        res.status(200).json({
            success: true,
            count: notifications.length,
            data: notifications
        });

    } catch (error) {

        await Log(
            "backend",
            "error",
            "controller",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};