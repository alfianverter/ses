const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have ``MANAGE MESSAGES`` permissions");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be Warned!");

    
  try{      
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("You Warned !!")
.setColor("#ec0000")
    .addField("Warned User", `${kUser}`)
    .addField("Warned By", `<@${message.author.id}>`)
    .addField("Warned In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    kUser.send(kickEmbed);
    message.channel.send(`${kUser} just got Warned !\n**Reason:** ${kReason}`);
  } catch (e) {
    message.channel.send(`${kUser} just got Warned !\n**Reason:** ${kReason}`);
  }
}

module.exports.help = {
  name:"warn"
}
