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

  async getByDni (req, res) {
    try {
      const client = await customer.getByDni(req.params.dni);
      console.log(`DNI del cliente obtenido: ${client.dni}`);
      res.json(client);
    } catch (error) {
      console.error(error); 
    }
  }

  async getByName (req, res) {
    try {
      const client = await customer.getByName(req.params.name);
      console.log(`Nombre del cliente obtenido: ${client.nombres}`);
      res.json(client);
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