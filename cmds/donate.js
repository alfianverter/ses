const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
.setTitle('🎊 Verter BOT 🎊')
.addField('Patreon:', '[Click Here, Lets help donate for bot verter !! And features will continue to grow](https://www.patreon.com/alfianverter)')
.setColor('#ec0000')
message.channel.send({embed})
}

exports.help = {
  name: "donate"
}
