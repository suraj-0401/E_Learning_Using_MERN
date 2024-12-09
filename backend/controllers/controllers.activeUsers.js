import { getActiveUsersCount } from "../websocket/websocketServer.js";

 export const fetchActiveUsers = (req, res) => {
    const activeUsers = getActiveUsersCount();
    res.status(200).json({ activeUsers });
};

