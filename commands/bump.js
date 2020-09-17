const Discord = require('discord.js');
const client = new Discord.Client();
        //     let channels_ = [];
//     channels_[channels_.length] = "";  
//     con.query(`SELECT * FROM Reklamy WHERE IDDS = ${message.guild.id}`,function(err,rows){
        
// })
 
module.exports.run = async(client, message, args,con) =>{

    if(!message.author.id == '631501243759591505'){return}

const BUMPembed = new Discord.MessageEmbed()
.setTitle(`\`📖\` **MARKETING: Lista polskich serwerów!**`)
.setURL("https://market-bot.pl/lista")
.setDescription(`**•** ${message.member.user}\n **Podbito serwer 👊** \nZobacz bump, na stronie https://market-bot.pl/lista `)
.setThumbnail('')
.setImage('https://cdn.discordapp.com/attachments/688391374252670986/731789308595404840/1_market_BUMP.png')
.setColor("#0000FF")
.setFooter(
  "Komenda została wywołana przez: " + message.author.tag + " | ID: " + message.author.id,
  message.author.displayAvatarURL({ dynamic: true })
);
message.channel.send(BUMPembed)
}
module.exports.help = {
    name: "bump",
    aliases: ['podbij']
}