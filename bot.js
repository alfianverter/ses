const Discord = require("discord.js");
const superagent = require("superagent");
const weather = require("weather-js");
const economy = require('discord-eco');
const bot = new Discord.Client({disableEveryone: true});
const moment = require("moment");
const momentDurationFormat = require("moment-duration-format");
const fs = require("fs");
const config = require("./config.json");
const figlet = require('figlet');
const Command = require("klasa");
const prefix = require("./config.json");

///DBL API
bot.commands = new Discord.Collection();
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN, bot); 


let coins = require("./coins.json");
let xp = require("./xp.json");
let {cooldown} = require("./cooldown.js")
let commandcooldown = cooldown;
let cdseconds = 5;
const { Canvas } = require("canvas-constructor"); // You can't make images without this.
const { resolve, join } = require("path"); // This is to get a font file.
const { Attachment } = require("discord.js"); // This is to send the image via discord.
const { get } = require("snekfetch");
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


bot.on("ready", async () => {
    console.log(`Logged in as : ${bot.user.tag}`);
    console.log(`${bot.user.username} is ready!`)
                
    function randomStatus() {
        let status = [`on ${bot.guilds.size} server`, `on ${bot.users.size.toLocaleString()} users`, 'Alfian Verter#1000',]
          let rstatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rstatus], {type: 'STREAMING', url: "https://www.twitch.tv/verterid"});
    }; setInterval(randomStatus, 20000)
    setInterval(() => {
    dbl.postStats(bot.guilds.size)
  }, 1800000);
});
bot.on("message", async message => {
  
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
	
	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
	
	if(!prefixes[message.guild.id]){
		prefixes[message.guild.id] = {
			prefixes: config.prefix
			
		};
	}
	let prefix = prefixes[message.guild.id].prefixes;
    
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

   if (!msg.startsWith(prefix)) return;
   if (commandcooldown.has(message.author.id)) {
      return message.channel.send(`\`Maaf tunggu selama 5 detik untuk memulai command kembali.\``).then(msg => msg.delete(2000));
      }
      commandcooldown.add(message.author.id);
      setTimeout(() => {
        commandcooldown.delete(message.author.id);
      }, 5000);
      
    try {
      let commandFile = require(`./cmds/${cmd}.js`);
      commandFile.run(bot, message, args);
    } catch (e) {
      console.log(e.message)
    } finally {
      console.log(`${message.author.tag} menggunakan perintah ${prefix}${cmd}`);
    }
  });
fs.readdir('./events', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`);
        const eventName = file.split('.')[0];
        bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
    });
});

bot.on("message", async autoresponder => {
    if(autoresponder.author.bot) return;
    if(autoresponder.channel.type === "dm") return;
      
        let sender = autoresponder.author;
        if (autoresponder.content.startsWith(prefix)) return;
    
    if (autoresponder.content === `<@!${bot.user.id}>`) {
    autoresponder.react('🏮');
    return autoresponder.channel.send(`Hi ${sender},` + ' use this command ``>help`` ')
    }
    
    if (autoresponder.content === `<@${bot.user.id}>`) {
    autoresponder.react('🏮');
    return autoresponder.channel.send(`Hi ${sender},` + ' use this command ``>help`` ')
    }
        
});

bot.on("guildMemberAdd", member => {
	let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
	if (!autorole[member.guild.id]) { // jika tidak ada autorole yang di set, agar tidak error saat ada yang join
		autorole[member.guild.id] = {
			autorole: config.autorole
		};
	}
	var role = autorole[member.guild.id].role;
	if (!role) return; // jika autorole 0 maka akan dihentikan dan tidak menyebabkan error
	member.addRole(role);
});

bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;

  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
});
bot.on('guildMemberAdd', async member => {
  let guild = member.guild;
  let autonick = JSON.parse(fs.readFileSync("./autonick.json", "utf8"));
  if(!autonick[member.guild.id]) return;
  
   var autonicksetting = JSON.parse(fs.readFileSync("./autonickonoff.json", "utf8"));
    if (!autonicksetting[member.guild.id]) {
     autonicksetting[member.guild.id] = {
      values: 1
      };
    }
  
    var values = autonicksetting[member.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {
      let newNick = autonick[member.guild.id].nick
      newNick = newNick.replace('{username}', member.user.username)
      member.guild.members.get(`${member.user.id}`).setNickname(newNick)
    }
});
bot.on('message', msg => {
  if (msg.content == "hadir") {
  let pingembed = new Discord.RichEmbed()
      .setColor("#38087e")
      .setTitle("📘 DISCORD INEONSIA ABSENSI 📘")
      .setDescription(`📢 Bagus, Selalu absen ya setiap harinya !!  \n
**Nama:** ${msg.author}
**NB:** Telah absen hari ini !!
**SAVE** 💾`)
.setTimestamp()
.setFooter("Data Waktu saat kamu absen ==>")
let kirim = msg.guild.channels.find(`name`, "📔absen");
if(!kirim) return msg.channel.send(`🚫 ${msg.author} **|** Absen di #📔absen`);
kirim.send(pingembed);
}
});
bot.on('message', msg => {
  if (msg.content == "Hadir") {
  let pingembed = new Discord.RichEmbed()
      .setColor("#38087e")
      .setTitle("📘 DISCORD INEONSIA ABSENSI 📘")
      .setDescription(`📢 Bagus, Selalu absen ya setiap harinya !!  \n
**Nama:** ${msg.author}
**NB:** Telah absen hari ini !!
**SAVE** 💾`)
.setTimestamp()
.setFooter("Data Waktu saat kamu absen ==>")
let kirim = msg.guild.channels.find(`name`, "📔absen");
if(!kirim) return msg.channel.send(`🚫 ${msg.author} **|** Absen di #📔absen`);
kirim.send(pingembed);
}
});
bot.on('MemberGuildAdd', msg =>{

})

bot.login(process.env.TOKEN);
