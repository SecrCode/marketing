const {client} = require("../index.js")
const Discord = require('discord.js');

 client.on("guildCreate", guild => {
    const NewServerEmbed = new Discord.MessageEmbed() 
    .setTitle("**Witaj, w Marketingu!**")
    .setDescription("Witaj! Dziękujemy za dodanie naszego bota!\n"+
    "Nasz bot **Marketing**, pomoze ci __*wypromować* swój serwer__ i zyskać nowych uytkowników w krótkim czasie!\n"+
    "**Oto kilka komend które warto sobie przyswoić**\n"+
    "● ``&pomoc - Pokazuje panel pomocy, i wszystkie komendy``\n"+
    "● ``&jak - Pełny poradnik, w jaki sposób ustawić naszego bota!``\n"+
    "● ``&staty - Pokazuje statystyki reklamy serwera!``\n\n"+
    "[**``Dodaj Bota``**](https://example.pl) [**``Strona Internetowa``**](https://example.pl) [**``Serwer Support``**](https://example.pl)")
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter("Marketing -- Najefektywniejszy bot reklamowy!","")
    .setColor("")

    guild.channels.cache.find(channel => 
        channel.type === "text" &&
        channel.permissionsFor(client.user).has("SEND_MESSAGES")).send(NewServerEmbed)

 })




























// client.on("guildCreate", guild => {
//   const leftEmbed = new Discord.MessageEmbed()
//     .setAuthor(
//       `Dodano bota na serwer ${guild.name}\nID: ${guild.id}\nID Właściciela: ${guild.ownerID}`,
//       "https://cdn.discordapp.com/emojis/702810851995942922.gif?v=1"
//     )
//     .setThumbnail(guild.iconURL())
//     .setColor("#00FF00")
//     .setFooter(
//       "Marketing™",
//       "https://cdn.discordapp.com/avatars/688312861927276554/0d11ab4a20647e646ab45d6e3f0ac0c3.png?size=128"
//     )
//     .setTimestamp();
//   client.channels.cache.get("688311675551612969").send(leftEmbed);
//   //remove from guildArray
// });