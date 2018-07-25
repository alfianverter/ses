const Discord = require('discord.js')

exports.run = (client, msg, args) => {
    
    let kiss = [
      "https://media.giphy.com/media/vaSA1fpCkY06I/giphy.gif",
      "https://media.giphy.com/media/3og0IvIXD1UrcEvNmw/giphy.gif",
      "https://media.giphy.com/media/xT9IgFh732bmm00u1a/giphy.gif",
      "https://media.giphy.com/media/Nydo55HzhyGqI/giphy.gif",
      "https://media.giphy.com/media/10wwy1cJ8j2aD6/giphy.gif",
      "https://media.giphy.com/media/3o7aDbX8g5rNzOzfyw/giphy.gif",
      "https://media.giphy.com/media/l0MYLr8Qh3opXBSSI/giphy.gif",
      "https://media1.tenor.com/images/395b565d26a74bcf6b6fc8cea50df021/tenor.gif",
      "http://cdn.smosh.com/wp-content/uploads/ftpuploads/bloguploads/awkward-kiss-little-girl.gif",
      "https://thumbs.gfycat.com/BasicPeskyGuillemot-max-1mb.gif",
      "https://i.pinimg.com/originals/fe/64/e9/fe64e9e2f16ced383c0cb69e5f71722d.gif",
      "http://25.media.tumblr.com/e7f39c316f0923710c9b12e9583455ba/tumblr_mj7yrrtFaa1s7cfr2o1_500.gif",
      "https://media2.giphy.com/media/TkDX9bkIROf8k/giphy.gif",
      "http://gifimage.net/wp-content/uploads/2017/09/anime-gif-kiss-11.gif",
      "https://i.imgur.com/eisk88U.gif",
      "https://i.pinimg.com/originals/42/c3/85/42c3851fc31dc3434dfe5fa7e3463f1d.gif",
      "https://i.makeagif.com/media/7-05-2015/553Vsb.gif",
      "https://i.gifer.com/2II9.gif",
      "http:/http://gif-finder.com/wp-content/uploads/2015/09/Angry-Birds-Orange-Kiss.gif/a.fod4.com/images/GifGuide/michael_scott/119477_o.gif",
      "http://gif-finder.com/wp-content/uploads/2015/09/Angry-Birds-Orange-Kiss.gif",
      "https://media1.tenor.com/images/6af13a438013667a81031dde8d6b6931/tenor.gif",
      "https://media1.tenor.com/images/a3e63e98f0344a2e9a040ea5df3769b0/tenor.gif",
      "https://media1.tenor.com/images/fb92d0be78a1ea19af0168c0ca29c1bd/tenor.gif?itemid=5615952",

    ]
    let kissresult = Math.floor((Math.random() * kiss.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`Ooppss! ${msg.author.username} is kiss themselves! `)
            .setImage(kiss[kissresult])
            .setFooter(`Request by : ${msg.author.username}`);
        msg.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!msg.mentions.members.first() === msg.isMentioned(msg.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${msg.author.username} kissing ${msg.mentions.members.first().user.username} so hot!`)
            .setImage(kiss[kissresult])
            .setFooter(`Request by : ${msg.author.username}`);
        msg.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Ooppss! ${msg.author.username} is kiss themselves! `)
        .setImage(kiss[kissresult])
        .setFooter(`Request by : ${msg.author.username} | © αυɢ°Kibay#7078`);
    msg.channel.send({
        embed: ghembed
    })
}
module.exports.help = {
  name:"kiss"
}
