const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async(client, message, args,con) =>{
    const embed = new Discord.MessageEmbed()
      .setTitle(":link:  Kliknij żeby mnie dodać!")
      .setURL(
        "https://discordapp.com/oauth2/authorize?client_id=688312861927276554&permissions=8&scope=bot"
      )
    //   .addField("\u200B","**Serwer support** [__***`KLIKNIJ`***__](https://discord.gg/veR9UrF)",true)
    // .addField("\u200B","**** [__***`KLIKNIJ`***__](https://discord.gg/veR9UrF)",true)
      .setColor("#009eff")
      .setFooter(
        "Komenda została wywołana przez: " + message.author.tag + " | ID: " + message.author.id,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel.send(embed);
}

module.exports.help = {
    name: "zapros",
    aliases: ['linki','invite']
}