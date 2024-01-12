import { Router } from "express";
import { customersController } from "../controllers/customers.controllers.js";
import { validateSchema, validateFindSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, findByDNISchema, findByNameSchema } from "../schemas/customer.schema.js";

const router = Router();

router.get('/', customersController.getAll);
router.get('/dni/:dni', validateFindSchema(findByDNISchema), customersController.getByDni);
router.get('/name/:name', validateFindSchema(findByNameSchema), customersController.getByName);
router.post('/', validateSchema(registerSchema), customersController.createOne);

export default router;