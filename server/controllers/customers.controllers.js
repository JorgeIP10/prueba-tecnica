import { customer } from "../models/customers.models.js";

class CustomersController {
  async getAll (req, res) {
    try {
      const clients = await customer.getAll();
      console.log(`Clientes obtenidos...`);
      res.json(clients);
    } catch (error) {
      console.error(error); 
    }
  }

  async createOne (req, res) {
    try {
      const newClient = await customer.createOne(req.body);
      console.log(`DNI del nuevo cliente: ${newClient.lastID}`);
      res.json(newClient);
    } catch (error) {
      console.error(error);
    }
  }
}

export const customersController = new CustomersController();