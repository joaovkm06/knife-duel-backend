import express from "express";
import { getAllMatches, createMatch } from "../Controller/matchController.js";

const router = express.Router();

router.get("/", getAllMatches);
router.post("/", createMatch);

export default router;
