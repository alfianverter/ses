const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {
let {body} = await superagent
.get("random.dog/woof.json")
var catembed = new Discord.RichEmbed()
.setTitle('Here is your random Dog!')
.setColor("#ec0000")
.setImage(body.url)
message.channel.send(catembed)
}

exports.help = {
  name: "dog"
}
