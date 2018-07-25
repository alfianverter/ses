const Discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{
  let embed = new Discord.RichEmbed()
  .setTitle("Restart")
  .setDescription("Maaf, perintah `restart` hanya dapat dijalankan oleh Pengembang.")
  .setColor("#ec0000");
  if(message.author.id !== '467298098096635934') return message.channel.send(embed);
  
message.channel.send(`\`Restarted in ${Math.floor(bot.ping)}ms \``).then(() =>{
process.exit(1);
})
 

                                           }
module.exports.help = {
name: "restart"
}
