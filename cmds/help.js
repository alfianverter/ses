const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let patrick = new Discord.RichEmbed()
.setAuthor('💎  Hello, i am Takagi  💎 ', bot.user.avatarURL)
.setDescription('this is a feature I give to you | use this prefix `>`')
.addField('»Anime Image','`neko` `pat` `meme`')
.addField('»Core','`help` `ping` `stats` `welcome` `userstats` `serverinfo`')
.addField('»Economy','`balance` `addbalance` `coins` `level` `slots` `pay`')
.addField('»Generator','`ascii` `translate` `google`')
.addField('»Moderation','`kick` `ban` `warn` `autoroles` `addrole` `removerole`')
.addField('»Utility','`avatar` `weather` `clear` `prefix`')
.addField('»Fun','`say` `vote` `8ball` `joke` `roll` `auto` `quiz`')
.addField('»Image','`cat` `dog` `slap` `twice`')
.addField('»NFSW','`boobs` `ass` `hentai`')
.addField('»Dev','`restart`')
.addField('»Support Bot','`votebot` `channel` `invite`')
.addField('»Music','`play` `pause` `resume` `volume` `stop` `skip` `np` `queue`')
.setColor("RANDOM")
  .setThumbnail(bicon)
.setFooter('©Takagi - Beta')
message.channel.send(patrick);
}

exports.help = {
  name: "help"
}
