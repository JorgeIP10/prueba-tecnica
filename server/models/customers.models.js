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

  getByDni(dni) {
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT * FROM clientes WHERE dni = ?';

      db.connection.all(sqlQuery, [dni], function (err, rows) {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  getByName(name) {
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT * FROM clientes WHERE nombres = ?';

      db.connection.all(sqlQuery, [name], function (err, rows) {
        if (err) {
          reject(err);
        } else {
          console.log(rows)
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