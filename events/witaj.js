const {client} = require("../index.js")
client.on("guildMemberAdd", member => {
    return
    if (member.guild.id == "688006607858434061") {
      member.send(
        "Witaj na ***Marketing™***  !\n\n> :pushpin: **Koniecznie przeczytaj <#688310079513952261> aby poznać nasze zasady**\n\n> :wave: **Przywitaj się na <#688006608630055007>**\n\n> :link: **No i zajrzyj na <#705371178956750879>**\n\n__`LINK DO SERWERA SUPPORT`__\nhttps://discord.gg/veR9UrF\n\n__`LINK DO DODANIA BOTA`__\nhttps://discordapp.com/oauth2/authorize?client_id=688312861927276554&permissions=8&scope=bot"
      );
    }
  });