const { PromisedDatabase } = require("promised-sqlite3");
const db = new PromisedDatabase();

const Database = require("./module/artists");
const ArtistId = require("./module/artistsId");

// om vi använder static då ska vi anropa direkt...
async function test() {
  await Database.Artists();
  await ArtistId.Artists(2);
  // console.log(await ArtistId.Artists(2))
}
test();
