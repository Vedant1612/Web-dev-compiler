import express from "express";
import { loadCode, saveCode } from "../controllers/compilerController";
import { verifyTokenAnonymous } from "../middlewares/verifyTokenAnonymous";

export const compilerRoutes = express.Router();

compilerRoutes.post("/save",verifyTokenAnonymous, saveCode);

compilerRoutes.post("/load", loadCode);
