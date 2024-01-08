import { Router } from "express";
import { customersController } from "../controllers/customers.controllers.js";

const router = Router();

router.get('/', customersController.getAll);
router.post('/', customersController.createOne);

export default router;