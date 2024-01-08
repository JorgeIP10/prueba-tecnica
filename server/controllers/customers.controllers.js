import { customer } from "../models/customers.models.js";

class CustomersController {
  async getAll (req, res) {
    try {
      const clients = await customer.getAll();
      console.log(`Clientes obtenidos...`);
      return res.json(clients);

    } catch (error) {
      console.error(error); 
      return res.json({message: 'Error'});
    }
  }

  async getByDni (req, res) {
    try {
      const client = await customer.getByDni(req.params.dni);

      if (client) {
        console.log(`DNI del cliente obtenido: ${client.dni}`);
        return res.json(client);
      }

      console.log('El cliente con el DNI solicitado no se encuentra registrado...');

      // Codigo 404 para recurso no encontrado
      return res.status(404).json({message: 'Error, el cliente no ha sido encontrado'});

    } catch (error) {
      console.error(error);
      return res.json({message: 'Error'});
    }
  }

  async getByName (req, res) {
    try {
      const client = await customer.getByName(req.params.name);

      if (client) {
        console.log(`Nombre del cliente obtenido: ${client.nombres}`);
        return res.json(client);
      }

      console.log('El cliente solicitado no se encuentra registrado...');

      // Codigo 404 para recurso no encontrado
      return res.status(404).json({message: 'Error, el cliente no ha sido encontrado'});

    } catch (error) {
      console.error(error);
      return res.json({message: 'Error'});
    }
  }

  async createOne (req, res) {
    try {
      const newClient = await customer.createOne(req.body);
      console.log(`DNI del nuevo cliente: ${newClient.lastID}`);

      // Codigo 201 para recurso creado
      return res.status(201).json(newClient);

    } catch (error) {
      console.error(error);

      // Error por DNI repetido
      if (error && error.code === 'SQLITE_CONSTRAINT' && error.errno === 19) {
        // Codigo 409 para indicar conflicto con el estado actual del recurso
        return res.status(409).json({ message: 'Error, el DNI ya está en uso.' });
      }

      // Para otros errores
      return res.status(500).json({ message: 'Error interno del servidor.' });
      }
  }
}

export const customersController = new CustomersController();