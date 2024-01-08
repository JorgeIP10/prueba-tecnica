import { db } from "./connection.js";

class Customer {
  getAll() {
    return new Promise((resolve, reject) => {
      db.connection.all('SELECT * FROM clientes', [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  createOne(client) {
    return new Promise((resolve, reject) => {
      const sqlQuery = 'INSERT INTO clientes (dni, nombres, apellidos, fecha_nacimiento, celular, correo, banco, numero_cci) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

      db.connection.run(sqlQuery, [client.dni, client.names, client.surnames, client.birthDate, client.cellPhone, client.email, client.bank, client.numberCCI], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this);
        }
      });
    });
  }
}

export const customer = new Customer();