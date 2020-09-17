const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async(client, message, args,con) =>{
  //Argument 2
    let args2 = args.slice().join(" ");

    //Operacje, w datach
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
  
    today = mm + "-" + dd + "-" + yyyy;
  
    if (!args.length) {
        message.channel.send("> ❌ **Musisz podać treść błędu!**");
        return;
      }
      if (
        message.author.id == "694238217385279538" ||
        message.author.id == "602849479355269130" ||
        message.author.id == "637592175659712532" ||
        message.author.id == "700658462656561215" ||
        message.author.id == "724670013449175100"
      ) {
        message.author.send(
          "<a:false:702810788980588654> **Ten serwer został zablokowany!**"
        );
        return;
      }
      const bug = new Discord.MessageEmbed()
        .setTitle("Zgłoszono błąd do administracji!")
        .setThumbnail(message.author.avatarURL())
        .setDescription(
          "Dziękujemy za zgłąszanie błędu naszego bota do administracji! Jeśli nasi programiści będą potrzebowali więcej informacji dot. błędu skontaktują się z tobą. Jeśli chcesz mieć bezpośredni kontakt z administracją dołącz na [**serwer support**](https://discord.gg/veR9UrF)"
        )
        .addField(
          "Szczegóły błędu",
          `⏰ **Zgłaszający**: ${message.author.tag} \nID: ${message.author.id} \n\n🧭 **Serwer**: ${message.guild.name} \n**ID**: ${message.guild.id} \n\n✏️ **Treść**: ${args2} \n\n 📅 **Data**: ${today}`
        )
        .addField(
          "Wszelkie trollowanie przez tą komendę będzie surowo karane",
          "\u200B"
        )
        .setColor("#00FFFF")
        .setFooter(
          "Komenda została wywołana przez: " +
            message.author.tag +
            " | ID: " +
            message.author.id,
            message.author.displayAvatarURL({ dynamic: true })
        );
      const bugADM = new Discord.MessageEmbed()
        .setTitle("Zgłoszono błąd!")
        .setThumbnail(message.author.avatarURL())
        .addField(
          "Szczegóły błędu",
          `⏰ **Zgłaszający**: ${message.author.tag} \nID: ${message.author.id} \n\n🧭 **Serwer**: ${message.guild.name} \n**ID**: ${message.guild.id} \n\n✏️ **Treść**: ${args2} \n\n 📅 **Data**: ${today}`
        )
        .setColor("#00FFFF")
        .setFooter("Moduł reportowania bug'ów w Marketing");
      message.channel.send(bug);
      client.shard.broadcastEval(() => {
      this.channels.cache.get("706063492867948565").send(bugADM);
      })
      
    
}

module.exports.help = {
    name: "bug",
    aliases: ['błąd'],
  cooldown: "5"
}