const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async(client, message, args,con) =>{
    return
    const NewServerEmbed = new Discord.MessageEmbed() 
    .setTitle("**Witaj, w Marketingu!**")
    .setDescription("Witaj! Dziękujemy za dodanie naszego bota!\n"+
    "Nasz bot **Marketing**, pomoze ci __*wypromować* swój serwer__ i zyskać nowych uytkowników w krótkim czasie!\n"+
    "**Oto kilka komend które warto sobie przyswoić**\n"+
    "● ``&pomoc - Pokazuje panel pomocy, i wszystkie komendy``\n"+
    " ● ``&jak - Pełny poradnik, w jaki sposób ustawić naszego bota!``\n"+
    "● ``&staty - Pokazuje statystyki reklamy serwera!``\n\n"+
    "[**``Dodaj Bota``**](https://example.pl) [**``Strona Internetowa``**](https://example.pl) [**``Serwer Support``**](https://example.pl)")
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter("Marketing -- Najefektywniejszy bot reklamowy!","")
    .setColor("")
console.log(message.guild.channels.cache.find(channel => 
    channel.type === "text" &&
    channel.permissionsFor(client.user).has("SEND_MESSAGES")))
message.guild.channels.cache.find(channel => 
    channel.type === "text" &&
    channel.permissionsFor(client.user).has("SEND_MESSAGES")).send(NewServerEmbed)
}
module.exports.help = {
    name: "send",
    
}

    