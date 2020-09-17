const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async(client, message, args,con) =>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
  
    today = mm + "-" + dd + "-" + yyyy;
    
}
module.exports.help = {
    name: "premium",
    aliases: ['premka', 'pakiet-premium']
}