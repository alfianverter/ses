const Discord = require("discord.js");


exports.run = async (bot, message, args) => {
message.channel.send('`Jika kamu ikhlas bantu kami dibulan puasa ini :( \n mari kita saling membantu untuk server ini :( \n kami sangat membutuhkan member support.. :*`')
message.channel.send('<https://discord.gg/9XnzBCw>')
message.delete();
}
    
exports.help = {
name: "support"
}
