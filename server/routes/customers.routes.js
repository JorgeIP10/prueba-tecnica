import { Router } from "express";
import { customersController } from "../controllers/customers.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema } from "../schemas/customer.schema.js";

const router = Router();

router.get('/', customersController.getAll);
router.get('/dni/:dni', customersController.getByDni);
router.get('/name/:name', customersController.getByName);
router.post('/', validateSchema(registerSchema), customersController.createOne);

export default router;