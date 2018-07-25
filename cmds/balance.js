const Discord = require("discord.js")
const economy = require("discord-eco");

exports.run = async (bot, message, args) => {
  
var member = message.mentions.members.first() || message.guild.members.get(args[0]);
            if (!member) {
            economy.fetchBalance(message.author.id).then((i) => {
            let icon = message.author.displayAvatarURL;
             var embed = new Discord.RichEmbed()
             .setColor("#ec0000")
             .setDescription(`Your 💳 Credits amount **$${i.money}** \n\n let's find your money:money_mouth:\n `)
             .setThumbnail('https://clipart.info/images/minicovers/1496184671stack-of-money.png')
              message.channel.send({embed});
            })
              return
            }
            if (member.user.bot) return message.channel.send(`Bots do not have money!`)
            economy.fetchBalance(member.user.id).then((i) => {
              var embed = new Discord.RichEmbed()
              .setColor("#ec0000")
              .setDescription(`💳 Credits amount ${member} is **$${i.money}**`)
              message.channel.send({embed});
            })
}
exports.help = {
    name: "bal"
}
