const Database = require('./config')

const initDb = {
  async init() {
    const db = await Database()
    console.log('Database created')
    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY,
      pass TEXT
    )`);
    console.log('created table rooms')
    await db.exec(`CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      read INT,
      room INT
    )`);
    await db.close()
  }
}

initDb.init();

