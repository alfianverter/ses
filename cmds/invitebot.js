const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
message.delete();
if(!args[0]) return message.channel.send("Silakan berikan id bot Anda!")
if(!args[1]) return message.channel.send("Silakan berikan prefix!")
if(message.guild.members.has(args[0])) return message.channel.send("**Bot ini sudah ada di server. Tidak bisakah kamu lihat? -_-**")
let channel = bot.channels.get("471009799857766400");
bot.fetchUser(args[0]).then(i => {
let embed = new Discord.RichEmbed()
.setTitle("Bot ditambahkan ke Antrean! - 🇮🇩 BOT INDONESIA")
.setDescription(`Terimakasih ${message.author} untuk mengundang bot Anda. Ini akan diuji dan ditinjau terlebih dahulu sebelumnya [inviting](https://discordapp.com/oauth2/authorize?client_id=${args[0]}&permissions=0&scope=bot), jadi harap bersabar.`)
.addField("Pengundang", `\`${message.author.username}\``, true)
.addField("ID", `\`${args[0]}\``, true)
.addField("Prefix", `\`${args[1]}\``, true)
.addField("Nama pengguna", `\`${i.username}\``, true)
.setColor(`#ec0000`)
.setThumbnail(i.displayAvatarURL)
channel.send(embed).then(msg => msg.react('⏳'))+message.reply('`Makasih Segera di proses` `Cek di` **bot-invite**')
})
}
module.exports.help = {
name: "invitebot"
}
