import sqlite3 from "sqlite3";

class Database {
  constructor() {
    this.connection = null;
  }

  connect() {
    const connection = new sqlite3.Database('./rapimoney-db.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Server connected to database...');
      }
    });
    this.connection = connection;
  }

  close() {
    this.connection.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('The connection has finished.');
    });
  }
}

export const db = new Database();