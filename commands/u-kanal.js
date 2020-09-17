const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async(client, message, args,con) =>{
  
     //Operacje, w datach
     var today = new Date();
     var dd = String(today.getDate()).padStart(2, "0");
     var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
     var yyyy = today.getFullYear();
   
     today = mm + "-" + dd + "-" + yyyy;
     //Reszta
    let channel_2;
    function Insert(Reklama) {
      var sqlI = `Insert into Reklamy (IDDS, Reklama, DataDodania) values ('${message.guild.id}', '${Reklama}', '${today}')`;
      var sql = `SELECT * from Reklamy where IDDS = ${message.guild.id}`;
      //console.log(`${message.guild.id}, ${args}, ${today}`)
      con.query(sql, function(err, row) {
        if (err) throw err;
  
        return;
      });
      console.log(message.guild.id)
      con.query(
        `Insert into Reklamy (IDDS, Reklama, DataDodania, Zatwierdz) values (?, ?, ?, ?)`,
        [message.guild.id, Reklama, today, "2"],
        function(err) {
          if (err) {
            con.query(
              `UPDATE Reklamy SET Reklama = ? where IDDS = ?`,
              [Reklama, message.guild.id],
              function(err) {
                con.query(
                  `UPDATE Reklamy SET Zatwierdz = ? where IDDS = ?`,
                  ["2", message.guild.id],
                  function(err) {}
                );
                if (err) throw err;
                console.log(`Updated ${message.guild.name} Ad!`);
              }
            );
            return;
          }
        }
      );
  
      message.react("688694803420282890");
      // message.channel.send("> 📯 **Ustawiono reklamę!**");
    }
    function Panel () {
      return
      console.log("Started Setting Panel")
      const embed1 = new Discord.MessageEmbed()
      .setTitle("Panel Ustawiania!")
      .setDescription("*Witaj w panelu ustawiania bota!*\n\n<a:tuba:738706342939852820> **Wklej ponizej swoją reklamę!**")
      const embed2 = new Discord.MessageEmbed()
      .setDescription("<:setting:738707432137556019> *Juz Prawie Gotowe!* **Teraz oznacz kanał na którym chcesz zeby były wysyłane reklamy**")
const embed3 = new Discord.MessageEmbed()
.setDescription("<a:true:702810851995942922> Skończone! **Teraz wpisz `&staty` aby zobaczyć status swojej reklamy!**")
const embed_anuluj = new Discord.MessageEmbed()
.setDescription("ANULOWANOO")
message.channel.send(embed1)
      const filter = m => {m.author.id === message.author.id; if(m.content === "anuluj"){
message.channel.send(embed_anuluj)
collector.stop()
return
      }} ;
      const filter2 = () => true;
      const channel = message.channel
  const collector = channel.createMessageCollector(filter,{ time: 30000 });
  collector.cler
  collector.on('collect', m => console.log(`Collected ${m.content}`));
  collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    }

    if (!args.length) {
        message.channel.send(
          ":eye: **Prawidłowe użycie komendy:** ``&u/ustaw #wzmianka-kanału-do-reklam``"
        );
        return;
      }
      if(args[0] == "panel"){
Panel()
        return
      }
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        var Permisje = new Discord.MessageEmbed()
          .setDescription(
            "<a:false:702810788980588654> **Potrzebujesz permisji** `ADMINISTRATOR` **żeby to zrobić!**"
          )
          .setColor("#FF0000");
  
        return message.channel.send(Permisje);
      }
//   const test = message.channel.permissionsFor(client.user.id, { SEND_MESSAGES: false } )
//   if(test){
    
//   }
      author = message.author.tag;
      let channel_l = message.mentions.channels.first();
      authorID = message.author.id;
      const embed = new Discord.MessageEmbed()
        .setTitle(`:bar_chart: **Ustawiono kanał reklam**`)
        .setDescription(`*Ustawiono kanał reklam na* ${channel_l}`)
        .setColor("#00a000")
        .setFooter(
          "Komenda została wywołana przez: " + author + " | ID: " + authorID,
          message.author.displayAvatarURL({ dynamic: true })
        );
      // con.query(`SELECT * FROM Kanaly where IDDS = ?`,[message.guild.id] ,function(err,rows){
      //    if(!rows.length){
      //    return message.channel.send(':eye: **Prawidłowe użycie komendy:** ``&u/ustaw #wzmianka-kanału-do-reklam``');
  
      //   }
  
      // })
  
      channel_2 = channel_l;
      //  con.query(`Insert into Kanaly (IDDS, Kanal_ID, DataDodania) values (?, ?, ?)`,[message.guild.id, args2, today], function(err){
      //   console.log('hi');
      //   if(err){
      console.log("XXXXX");
      con.query(
        `Insert into Kanaly(IDDS, Kanal_ID, Data_Dodania) values (?, ?, ?)`,
        [message.guild.id, channel_2.id, today],
        function(err) {
          console.log("Run!");
          if (err) {
            
            con.query(
              `UPDATE Kanaly SET Kanal_ID = ${channel_2.id} where IDDS = ${message.guild.id}`,
              function(err, result) {
                if (err) throw err;
                
                message.react("688694803420282890");
              }
            );
            return;
          }
        }
      );
      console.log("XXXXX22222");
      channel_l.createInvite({ maxAge: 0 }).then(invite => {
        //  message.channel.send(`***Testowy link do tego serwera*** *#TESTY-NOWYCH-FUNKCJI* https://discord.gg/${invite.code}`)
        con.query(
          `UPDATE Kanaly SET Invite_Code = '${invite.code}' where IDDS = ${message.guild.id}`,
          function(err, result) {
            if (err) throw err;
          }
        );
      });
      const UstawionoEmbed = new Discord.MessageEmbed()
      .setDescription("<a:true:702810851995942922> **Ten kanał został ustawiony jako kanał reklam, tego serwera**")
      .setFooter("Komenda została wywołana przez: " + author + " | ID: " + authorID,message.author.displayAvatarURL({ dynamic: true }))
     // .setThumbnail("https://thumbs.gfycat.com/ZealousFineHochstettersfrog-size_restricted.gif")
      .setColor("#00a000")
  //     if(!channel_l.id == message.channel.id){
  // channel_l.send(UstawionoEmbed)
  //     }
  message.channel.send(embed);
  channel_2.setName("⛱⎜reklamy-marketing");

  channel_2.setTopic("<a:voicestaty:718036455527809054> Tu reklamy wysyła bot **Marketing**");
      
      
}

module.exports.help = {
    name: "ustaw",
    aliases: ['u'],
}