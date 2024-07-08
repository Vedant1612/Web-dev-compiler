"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compilerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const compilerController_1 = require("../controllers/compilerController");
const verifyTokenAnonymous_1 = require("../middlewares/verifyTokenAnonymous");
const verifyToken_1 = require("../middlewares/verifyToken");
exports.compilerRoutes = express_1.default.Router();
exports.compilerRoutes.post("/save", verifyTokenAnonymous_1.verifyTokenAnonymous, compilerController_1.saveCode);
exports.compilerRoutes.delete("/delete/:id", verifyToken_1.verifyToken, compilerController_1.deleteCode);
exports.compilerRoutes.post("/load", verifyTokenAnonymous_1.verifyTokenAnonymous, compilerController_1.loadCode);
exports.compilerRoutes.put("/edit/:id", verifyToken_1.verifyToken, compilerController_1.editCode);
exports.compilerRoutes.get("/get-all-codes", compilerController_1.getAllCodes);
