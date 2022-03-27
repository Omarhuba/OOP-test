const { PromisedDatabase } = require("promised-sqlite3");
const db = new PromisedDatabase();

class ArtistId {
  constructor(artists, album) {
    this.artists = artists;
    this.album = album;
  }
  static async Artists(id) {
    await db.open("./db/chinook.db");
    const getArtist_id = await db.get(
      `SELECT * FROM artists WHERE ArtistId = ${id} `
    );
    await db.close();
    console.log(getArtist_id);
    return getArtist_id;
  }
}

// const newDatabase = new Database()
// console.log(newDatabase.Artists());

module.exports = ArtistId;
