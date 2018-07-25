const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {
let {body} = await superagent
.get("aws.random.cat/meow")
var catembed = new Discord.RichEmbed()
.setTitle('Here is your random cat!')
.setColor("#ec0000")
.setImage(body.file)
message.channel.send(catembed)
}

exports.help = {
  name: "cat"
}
