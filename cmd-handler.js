const fs = require('fs'); 
module.exports = async (client) => {
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
}