const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("🚫 **| You dont have `MANAGE_MEMBERS` permissions.**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("🚫 **| That user cannot be found!**");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("🚫 **| Please specify a role!**");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("🚫 **| Couldn't find that role.**");

  if(rMember.roles.has(gRole.id)) return message.reply("🚫 **| They already have that role.**");
  await(rMember.addRole(gRole.id));
  message.channel.send(`✔ | ${rMember} has been given the ${gRole.name} role.`)
  
}

module.exports.help = {
  name: "addrole"
}
