import express from 'express';
import connectDb from './database/database.js';
import userRoutes from './routes/routes.user.js';
import paymentRoutes from './routes/routes.payment.js';
import contactRoutes from './routes/routes.contact.js';
import dotenv from 'dotenv';
import cors from 'cors';
import activeUser from './routes/routes.activeUsers.js'
import courseRoutes from './routes/routes.course.js'
import { initWebSocket } from './websocket/websocketServer.js';
import http from 'http'
dotenv.config();
const app = express();
const server=http.createServer();

// Middleware to parse JSON
app.use(express.json());
app.use(cors())
dotenv.config();

// Database connection
connectDb;

// User routes
app.use('/api/user', userRoutes);

// payment routes 
app.use('/api/user',paymentRoutes);

// contact routes 
app.use('/api/user',contactRoutes);

// initialize websocket server 
initWebSocket(server);

// activeUser counts 
app.use('/api/user',activeUser);

// course routes
app.use('/api/admin',courseRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (error) => {
  console.error(`Error starting server: ${error.message}`);
});
