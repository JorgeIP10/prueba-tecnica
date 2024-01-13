import { Router } from "express";
import {
  login,
  logout,
  verifyToken,
} from "../controllers/auth.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema } from "../schemas/customer.schema.js";

const router = Router();

router.post("/login", validateSchema(loginSchema), login);
router.get("/verify", verifyToken);
router.post("/logout", logout);

export default router;