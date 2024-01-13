import { customer } from "../models/customers.models.js";

class CustomersController {
  async getAll (req, res) {
    try {
      const customers = await customer.getAll();
      console.log(`Customers were found...`);
      return res.json(customers);

    } catch (error) {
      console.error(error); 
      return res.json({message: 'Error'});
    }
  }

  async getByDni (req, res) {
    try {
      const requestedCustomer = await customer.getByDni(req.params.dni);

      if (requestedCustomer.length != 0) {
        console.log(`Customer DNI found: ${requestedCustomer[0].dni}`);
        return res.json(requestedCustomer);
      }

      console.log('Customer with DNI requested has not been found...');

      // Code 404 for resource not found
      return res.status(404).json({error: 'Error, customer has not been found'});

    } catch (error) {
      console.error(error);
      return res.json({error: 'Error'});
    }
  }

  async getByName (req, res) {
    try {
      const requestedCustomer = await customer.getByName(req.params.name);

      if (requestedCustomer.length != 0) {
        console.log(`There are ${requestedCustomer.length} customers with name ${requestedCustomer[0].nombres}`);
        return res.json(requestedCustomer);
      }

      console.log('The requested customer is not registered...');

      // Code 404 for resource not found
      return res.status(404).json({error: 'Error, customer has not been found'});

    } catch (error) {
      console.error(error);
      return res.json({message: 'Error'});
    }
  }

  async createOne (req, res) {
    try {
      const newCustomer = await customer.createOne(req.body);
      console.log(`DNI of the new customer: ${newCustomer.lastID}`);

      // Code 201 for the created resource
      return res.status(201).json(newCustomer);

    } catch (error) {
      console.error(error);

      // Error due to repeated DNI
      if (error && error.code === 'SQLITE_CONSTRAINT' && error.errno === 19) {
        // Code 409 to indicate conflict with the current state of the resource
        console.log('Error, the DNI is already in use');
        return res.status(409).json({ message: 'Error, the DNI is already in use.', type: 'repeatedDni' });
      }

      // For another errors
      return res.status(500).json({ message: 'Internal server error.' });
      }
  }
}

export const customersController = new CustomersController();