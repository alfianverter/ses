const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
		message.react('👍');
		message.react('👎');
		message.react('👐');
		message.channel.send('`click the reaction to rate!`')
}

exports.help = {
  name: "vote"
}
