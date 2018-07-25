const Discord = require("discord.js");
const ms = require("parse-ms");
const economy = require("discord-eco");
let {cooldown} = require("../dailycooldown.js")
let cooldowndaily = cooldown;
exports.run = async (bot, message, args) => {

if (cooldowndaily.has(message.author.id)) {
             var cooldown = 39600000 * 2 + 3600000 + 3540000 + 59000;
             var cooldowntime = cooldown
             var timeobj = ms(cooldown);
             var embed = new Discord.RichEmbed()
             .setColor('#ec0000')
             .setDescription(`**<@${message.author.id}>, You have been used Daily Credits, try again in 24 hours!**`)
             return message.channel.send(embed);
            }   
            cooldowndaily.add(message.author.id);
            economy.updateBalance(message.author.id, 200).then((i) => {
              var embed = new Discord.RichEmbed()
              .setColor('#ec0000')
              .setDescription(`**<@${message.author.id}>**, you received your **$200** daily credits`)
              message.channel.send(embed);
            })
            setTimeout(() => {
             cooldowndaily.delete(message.author.id);
           }, 86400000);
};
  exports.help = {
  name: "daily"
}
