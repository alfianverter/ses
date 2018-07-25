const Discord = require('discord.js');

exports.run = async (bot, message, args, member) => {
 
  message.guild.members.forEach(member => member.setNickname(`💢 ${member.user.username}`))
}
exports.help = {
    name: "w"
}