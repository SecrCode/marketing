const Discord = require('discord.js');
const client = new Discord.Client();
         
module.exports.run = async(client, message, args,con) =>{
    // let channels_ = [];
    // channels_[channels_.length] = "";  
    // con.query(`SELECT * FROM Reklamy WHERE IDDS = ${message.guild.id}`,function(err,rows){  
// })
if(!message.author.id == '631501243759591505'){return}

const LINKembed = new Discord.MessageEmbed()
.setTitle(`\`🔗\` **Spersonalizowane Linki do Serwera!**`)
.setDescription(`**●** \`&link utworz <nazwa>\` \`-\` **Ustawia twoją stronę**\t\n`+
"**●** \`&link opis <treść>\` \`-\` Ustawia opis serwera\t\n"+
"**●** \`&link kategoria\` \`-\` **Ustawia kategorię serwera**\t\n"+
"**●** \`&link baner <link_do_baneru>\` \`-\` Ustawia baner serwera \t\n"+
"**●** \`&link kolor <kolor>\` \`-\` **Ustawia kolor uzyty na stronie**\t\n\n"+
"**●** \`&staty link` \`-\` Pokazuje stan link'u\t\n\n"+
":bulb: __**PRO TIP!**__   Link do **serwera** jest regenerowany *AUTOMATYCZNIE!*")
.setThumbnail('')
.setImage('https://cdn.discordapp.com/attachments/688391374252670986/731817256119435264/1_market_link.png')
.setColor("#0000FF")
.setFooter(
  "Komenda została wywołana przez: " + message.author.tag + " | ID: " + message.author.id,
  message.author.displayAvatarURL({ dynamic: true })
);

let ErrorEmbed = new Discord.MessageEmbed()
.setDescription("<a:false:702810788980588654> **Nie podałeś tekstu!**")
.setColor("#FF0000");

let UstawionoLINK = new Discord.MessageEmbed()
.setTitle("**Ustawiono Link!**")
.setDescription("")
if(args[0] == "pomoc" ||args[0] == "help" || !args.length){
message.channel.send(LINKembed)
}
if(args[0] == "utworz" || args[0] == "ustaw"){
    if(!args[1]){
        message.channel.send(ErrorEmbed)
    }else{
        
    }
}
if(args[0] == "opis"){
if(!args[1]){
    message.channel.send(ErrorEmbed)
}else{

}
}
if(args[0] == "baner"){

}
if(args[0] == "kolor"){

}
}
module.exports.help = {
    name: "link",
    aliases: ['skróc']
}