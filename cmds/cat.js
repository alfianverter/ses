const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
  .get(`aws.random.cat/meow`);

  let catembed = new Discord.RichEmbed()
.setColor("#ec0000")
  .setTitle(`${message.author.username} | Your cat!`)
  .setImage(body.file);

  message.channel.send(catembed)

}

module.exports.help = {
  name: "cat"
}
