const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have ``Kick Members`` permissions");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

       message.guild.member(kUser).kick(kReason);
    
  try{      
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("KICK !!")
.setColor("#ec0000")
    .addField("Kicked User", `${kUser}}`)
    .addField("Kicked By", `<@${message.author.id}>`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    kUser.send(kickEmbed);
    message.channel.send(`${kUser} just got kick from this server!\n**Reason:** ${kReason}`);
  } catch (e) {
    message.channel.send(`${kUser} just got kick from this server!\n**Reason:** ${kReason}`);
  }
}

module.exports.help = {
  name:"kick"
}
