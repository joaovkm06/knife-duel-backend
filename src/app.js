import express from "express";
import cors from "cors";
import playerRoutes from "./routes/playerRouter.js";
import matchRoutes from "./routes/matchRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/players", playerRoutes);
app.use("/api/matches", matchRoutes);

export default app;
