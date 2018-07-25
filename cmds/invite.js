const Discord = require("discord.js");


exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
.setTitle('want to invite this bot to your server? :robot:')
.addField('Link','[Click Here](https://discordapp.com/oauth2/authorize?client_id=460868992362610688&scope=bot&permissions=943759423)', true)
.setColor("#ec0000")
.setFooter('©BETA | By: VERTER | 2018')
message.channel.send({embed})

}
    
exports.help = {
name: "invite"
}
    
