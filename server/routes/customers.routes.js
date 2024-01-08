import { Router } from "express";
import { customersController } from "../controllers/customers.controllers.js";

const router = Router();

router.get('/', customersController.getAll);
router.get('/dni/:dni', customersController.getByDni);
router.get('/nombre/:name', customersController.getByName);
router.post('/', customersController.createOne);

export default router;