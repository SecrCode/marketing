const {client} = require("../index.js")
client.on("guildDelete", guild => {
  
    var guildID = guild.id
    //Usuwa reklame podczas usunięcia bota
    con.query(`DELETE FROM Reklamy WHERE IDDS = ${guildID}`, function(err, result) {
      if(err) throw err
  console.log("Podczas usuwania reklamy:\n\n" + result)
    })
    con.query(`DELETE FROM Kanaly WHERE IDDS = ${guildID}`, function(err, result) {
      if(err) throw err
  console.log("Podczas usuwania kanaly:\n\n" +result)
    })
    console.log("Zakończono")
    
  });