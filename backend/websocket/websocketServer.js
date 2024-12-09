import { WebSocketServer } from 'ws';

let activeUsers = 0;

const initWebSocket = (server) => {
    const wss = new WebSocketServer({ server });

    wss.on('connection', (ws) => {
        activeUsers++;
        console.log('User connected. Active users:', activeUsers);

        ws.on('close', () => {
            activeUsers--;
            console.log('User disconnected. Active users:', activeUsers);
        });

        // Handle incoming messages (optional)
        ws.on('message', (message) => {
            console.log('Received message:', message);
        });
    });
};

const getActiveUsersCount = () => activeUsers;

export { initWebSocket, getActiveUsersCount };
