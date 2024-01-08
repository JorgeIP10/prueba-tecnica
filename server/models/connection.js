import sqlite3 from "sqlite3";

class Database {
  constructor() {
    this.connection = null;
  }

  connect() {
    const connection = new sqlite3.Database('./rapimoney-db.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Servidor conectado a la base de datos...');
      }
    });
    this.connection = connection;
  }

  close() {
    this.connection.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Conexion finalizada.');
    });
  }
}

export const db = new Database();