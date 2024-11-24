import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

// Router for User 
router.post("/signup", UserController.signup);
router.post("/login", UserController.login);

export const UserRoutes = router;