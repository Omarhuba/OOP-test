const { PromisedDatabase } = require("promised-sqlite3");
const db = new PromisedDatabase();

class Database {
  constructor(artists, album) {
    this.artists = artists;
    this.album = album;
  }
  async Artists() {
    await db.open("./db/chinook.db");
    const getArtist = await db.all("SELECT * FROM artists");
    await db.close();
    console.log(getArtist);
    return getArtist;
  }
}

// const newDatabase = new Database()
// console.log(newDatabase.Artists());

module.exports = new Database();
