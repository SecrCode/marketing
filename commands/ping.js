const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async(client, message, args,con) =>{
    message.channel.send("**Pong!** `"+client.ws.ping + "` ms")
}
module.exports.help = {
    name: "ping",
}