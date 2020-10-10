
const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
//<---- JSON ---->
const config = require("./config.json")
const dbconfig = require("./data/dbconnect.json")
//<---- JSON ---->

//<---- CMD HANDLER ---->
require("./cmd-handler.js")(client)
//<---- CMD HANDLER ---->

//<---- EVENT HANDLER ---->
require("./event-handler.js")(client);
//<---- EVENT HANDLER ---->

var mysql = require("mysql");
var prefix = config.prefix;

client.commands = new Discord.Collection();
client.commands = new Discord.Collection();

const cooldowns = new Discord.Collection();

var con = mysql.createPool({
  
});

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    return console.log(
      "[--:--]: Status [ERROR 404]: File Not Found. Folder 'commands' is empty."
    );
  }
  jsfile.forEach(f => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
  });

  console.log(`Ładowanie ${jsfile.length} komend. Prosze czekac...`);

  jsfile.forEach((f, i) => {
    require("./commands/" + f);
    console.log(`» ${i + 1}. ${f} został pomyślnie załadowany!`);
  });
});

const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

client.on("message", async message => {

    let prefixDB;
    
    let prefixRegex = new RegExp(`^(<@!?${client.user.id}> |${escapeRegex(prefix)})\\s*`);
    await con.query("SELECT * FROM Server_Info WHERE IDDS = ?",[message.guild.id],function(err,rows){
      if(err) throw err
    
      if(rows.length){
      
      prefixDB = rows[0].Prefix
      prefixRegex = new RegExp(`^(<@!?${client.user.id}> |${escapeRegex(prefixDB)}|${escapeRegex(prefix)})\\s*`);
    }else{
      if(!prefixRegex == new RegExp(`^(<@!?${client.user.id}> |${escapeRegex(prefix)})\\s*`)){

      prefixRegex = new RegExp(`^(<@!?${client.user.id}> |${escapeRegex(prefix)})\\s*`);
      }
    }
   
  if(message.channel.type === "dm")return;
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);
  
  if (!message.content.startsWith(matchedPrefix) ||!message.content.startsWith(matchedPrefix) || message.author.bot) return;
  
  const args = message.content.slice(matchedPrefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
    
  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName)
    );


    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Discord.Collection());
    }
    
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    
    if (timestamps.has(message.author.id) && timestamps.has(command.help.name) ) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        console.log(command)
        console.log(command.name)
        return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.help.name}\` command.`);
      }
    }
    
    timestamps.set(message.author.id, now, command.help.name);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


    if (
      message.author.id == "694238217385279538" ||
      message.author.id == "602849479355269130" ||
      message.author.id == " 637592175659712532" ||
      message.author.id == "700658462656561215"
      ||   message.author.id == "726925044978155582"||
      message.author.id == "452581229649461258" ||
      message.author.id == "719613364573044749" ||
      message.author.id == "580755721386459136" ||
      message.guild.id == "726925044978155582"

    ){
      message.author.send(
        "<a:false:702810788980588654> **Ten serwer został zablokowany!**"
      );
      return
    }

  if (command){

  command.run(client, message, args, con);
  }else
  {
      message.react("702810788980588654")
  }
  })
});

client.on("ready", () => {

  const STATUS = `b&pomoc | Marketing Beta | Shard: ${client.shard.ids[0] +21}`

console.log(client.ws.ping)
  console.log("» BOT STATUS: ✅ ON");
  function Activ(){
  client.user.setActivity(STATUS, {
    type: config.Status_State
  });
}
  setInterval(Activ, 5000)
  

  console.log("» USTAWIONO STATUS\n");
 
  console.log("⎡ Uzytkownicy "+client.users.cache.size + "\n| Serwery " +client.guilds.cache.size + "\n⎣ Kanały" + client.channels.cache.size)
  
});

client.on("error", () => {
  console.log("» BOT STATUS: ⛔️ OFF [ERROR WAS OCCURRED]");
})

client.login(config.token);

module.exports = {
  client: client
}
