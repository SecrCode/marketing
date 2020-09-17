const {client} = require("../index.js")
client.on("guildMemberRemove", member => {
    return
    if (member.guild.id == "688006607858434061") {
      member.send(
        "**Szkoda że nas opuściłeś** :sob:  __Jeśli chciałbyś wrócić, wejdź do nas przez ten link__: https://discord.gg/veR9UrF"
      );
    }
  });