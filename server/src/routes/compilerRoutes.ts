import express from "express";
import {
  deleteCode,
  editCode,
  getAllCodes,
  loadCode,
  saveCode,
} from "../controllers/compilerController";
import { verifyTokenAnonymous } from "../middlewares/verifyTokenAnonymous";
import { verifyToken } from "../middlewares/verifyToken";

export const compilerRoutes = express.Router();

compilerRoutes.post("/save", verifyTokenAnonymous, saveCode);
compilerRoutes.delete("/delete/:id",verifyToken, deleteCode);
compilerRoutes.post("/load",verifyTokenAnonymous, loadCode);
compilerRoutes.put("/edit/:id", verifyToken, editCode);
compilerRoutes.get("/get-all-codes", getAllCodes);
