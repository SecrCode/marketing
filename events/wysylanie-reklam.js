const {client} = require("../index.js")
const config = require("../config.json")
//Cykl Num
const CyklNum = 0;

client.on("ready", () => {
    console.log(`<---- Wysyłanie reklam ---->\n✅ STATUS: ON\n🤔 Cykl: ${config.Cykl[0]}`)

    var i = 0;
  var channelDB;
  var KodLinku;
  var CzyDobry = true;
  var LINK;
  var IDDS = ""
  if(false){
  function Cykl_Reklam() {

    setTimeout(function() {
      con.query(`SELECT * FROM Kanaly ORDER BY RAND() LIMIT 1;`, function(
        err,
        rows
      ) {
        if (err) throw err;
        if (!rows.length) {
          myLoop();
          return;
        }

        channelDB = rows[0].Kanal_ID;
      });
      //Creating the server link
      function Create_LINK(){
        var sql = `SELECT * FROM Kanaly WHERE IDDS = ${IDDS}`
        console.log(sql)
       
        

 con.query(sql, function(err,rows) {
   if(err){throw err}
   if(!rows.length){
   // KodLinku = rows[0].Invite_Code
    LINK = `__\`BRAK\`__`
   // client.guilds.cache.get()
    console.log("BRAK")
    console.log(rows)
   }else{
     
     KodLinku = rows[0].Invite_Code
     LINK = `https://discord.gg/${KodLinku}`

console.log("JEST! "+rows[0].Invite_Code + " ID SERWA: " + rows[0].IDDS)
   }

 })


 if(!KodLinku){
  CzyDobry = false
 }
      }


      async function GetIDDS(IDR){
        
        console.log(IDR)
        var sql2 = `SELECT * FROM Reklamy WHERE IDR = ${IDR}`
        await con.query(sql2, function(err,rows) {
          if(err) throw err
          IDDS = rows[0].IDDS
          console.log(rows)
                  })
                  
      }




      con.query(`SELECT * FROM Reklamy where Zatwierdz = 0`, async function(
        err,
        rows
      ) {
        if (err) throw err;

        
        if (!rows.length) {
          myLoop();
          return;
        }
      

        if (!client.channels.cache.has(channelDB)) {
          myLoop();
          return;
        }
        if (!channelDB) {
          myLoop();
          return;
        }
        if (!rows[i].IDR) {
          myLoop();
          return;
        }
        if (!rows[i].Reklama) {
          myLoop();
          return;
        }
        var Wyslano_L = parseInt(rows[i].Wyslano_L);
        Wyslano_L += 1
        //await con.query(`Select * from Reklamy`, async function(err) {
          let sql =  `UPDATE Reklamy SET Wyslano_L = '${Wyslano_L}' WHERE IDR = '${rows[i].IDR}'`
          console.log(sql)
          await con.query(sql
         ,
          function(err, result, fields) {
            if (err) throw err;
            
          }
          );
        // });
        // var IDDS
        // console.log(rows[i].IDR)
        // var sql2 = `SELECT * FROM Reklamy WHERE IDR = ${rows[i].IDR}`
        // con.query(sql2, function(err,rows) {
        //   if(err) throw err
        //   IDDS = rows[0].IDDS
        //           })
        // console.log(rows[i].IDDS)
//         var sql = `SELECT * FROM Kanaly WHERE IDDS = ${rows[i].IDDS}`
//         console.log(sql)
       
        

//  con.query(sql, function(err,rows) {
//    if(err){throw err}
//    if(!rows.length){
//    // KodLinku = rows[0].Invite_Code
//     LINK = `__\`BRAK\`__`
//    // client.guilds.cache.get()
//     console.log("BRAK")
//     console.log(rows)
//    }else{
     
//      KodLinku = rows[0].Invite_Code
//      LINK = `https://discord.gg/${KodLinku}`

// console.log("JEST! "+rows[0].Invite_Code + " ID SERWA: " + rows[0].IDDS)
//    }

//  })


//  if(!KodLinku){
//   CzyDobry = false
//  }
 
//console.log(IDR)
var XD;
if (!client.channels.cache.has(channelDB)) {
  myLoop();
  return;
}
if (!channelDB) {
  myLoop();
  return;
}
      //   var sql2 = `SELECT * FROM Reklamy WHERE IDR = ${rows[i].IDR}`
      //   console.log(sql2)
      //  con.query(sql2,  function(err,rows2) {
      //     if(err) throw err
      //     if(rows){
      //    var IDDS = rows[i].IDDS
      //     console.log(IDDS)
      //     //return IDDS
      //     }
      //     console.log(rows2)
      console.log(rows[i])
          var sql3 = `SELECT * FROM Kanaly WHERE IDDS = ${rows[i].IDDS}`
          console.log(sql3)
         con.query(sql3, function(err,rows3) { 
           if(err) throw err
          if (!client.channels.cache.has(channelDB)) {
            myLoop();
            return;
          }
          if (!channelDB) {
            myLoop();
            return;
          }
console.log(rows3)
  if(LINK){
  var LINK = rows3[0].Invite_Code
  console.log(LINK)
  client.channels.cache
          .get(`${channelDB}`)
          .send(
            `**ID:** \`${rows[i].IDDS}\` **Nr.** \`${rows[i].IDR}\` https://discord.gg/${LINK}\n\n\n` +
              rows[i].Reklama
          );
  }else{
    client.channels.cache
          .get(`${channelDB}`)
          .send(
            `**ID:** \`${rows[i].IDDS}\` **Nr.** \`${rows[i].IDR}\` __\`BRAK\`__\n\n\n` +
              rows[i].Reklama
          );
  }
         
          
                  
                
//console.log("NEW    "+IDDS(rows[i].IDR))
        // client.channels.cache
        //   .get(`${channelDB}`)
        //   .send(
        //     `**ID:** \`${rows[i].IDDS}\` **Nr.** \`${rows[i].IDR}\` __\`BRAK\`__\n\n\n` +
        //       rows[i].Reklama
        //   );
          // })
          })
          
 
        i++;
        if (i < rows.length) {
          myLoop();
          Wyslano_L = 0;
        }
        if (i >= rows.length) {
          i = 0;
          Wyslano_L = 0;
          myLoop();
        }
      });
    }, 40000);
  }

  Cykl_Reklam();
}
  });