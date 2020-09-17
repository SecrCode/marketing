const Discord = require('discord.js');
const client = new Discord.Client();
         
module.exports.run = async(client, message, args,con) =>{
    let prefix = args[0]
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        const Permisje = new Discord.MessageEmbed()
          .setDescription(
            "<a:false:702810788980588654> **Potrzebujesz permisji** `ADMINISTRATOR` **żeby to zrobić!**"
          )
          .setColor("#FF0000");

        return message.channel.send(Permisje);
      }
    const ErrorProvideEmbed = new Discord.MessageEmbed()
.setDescription("<a:false:702810788980588654> Podaj prefix, który chcesz ustawić")
.setColor("#FF0000")
if (!args.length) {
        message.channel.send(":eye: **Prawidłowe uzycie komendy: `&prefix prefix_serwera` / reset: `&prefix reset`**")
        return
    }
    const resetEmbed = new Discord.MessageEmbed()
    .setDescription(":warning: **Zresetowano customowy prefix dla tego serwera!**")
    .setColor("#ffff00")
    if(args[0] == "reset"){
        con.query(`UPDATE Server_Info SET Prefix = '&' WHERE IDDS = ?`,[message.guild.id],function(err){
            if(err) throw err
                        })
message.channel.send(resetEmbed)
        return
    }
const prefixEmbed = new Discord.MessageEmbed()
//.setTitle("__**USTAWIONO** `Prefix`")
.setDescription(`<a:true:702810851995942922> **Ustawiono prefix** \`${prefix}\` **dla tego serwera**`)
.setColor("#00ff00")
const ErrorLengthEmbed = new Discord.MessageEmbed()
.setDescription("<a:false:702810788980588654> **Prefix moze mieć maksymalnie** `2` **znaki**")
.setColor("#FF0000")
if(prefix.length > 2){
    message.channel.send(ErrorLengthEmbed)
    return
}
    con.query(`INSERT INTO Server_Info (IDDS, Prefix) VALUES (${message.guild.id},'${prefix}') `,function(err){
        if(err) {
            
            con.query(`UPDATE Server_Info SET Prefix = '${prefix}' WHERE IDDS = ?`,[message.guild.id],function(err){
if(err) throw err
            })
        }
    })
    
    message.channel.send(prefixEmbed)
//WHERE IDDS = ${message.guild.id}
}
module.exports.help = {
    name: "prefix",
    aliases: ['ustaw-prefix']
}