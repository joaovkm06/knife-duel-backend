import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import connectDB from "./config/dbConnect.js";
import app from "./app.js";
import gameSocket from "./sockets/gameSocket.js";

dotenv.config();
connectDB();

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

gameSocket(io);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(` Servidor rodando na porta ${PORT}`));
