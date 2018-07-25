const Discord = require("discord.js");
const gifSearch = require("gif-search");


module.exports.run = (bot, message, args, ops, PREFIX) => {
 

    if (!args[0]) return message.channel.send("`"+PREFIX+"gif <gname>`");

    gifSearch.query(args[0]).then(
        gifUrl => {
        let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
        var embed = new Discord.RichEmbed()
            .setColor(`#${randomcolor}`)
            .setTimestamp() 
            .setImage(gifUrl)
            .setFooter(`Requested by: ${message.author.tag}`);
        message.channel.send(embed);
    });

    

}

module.exports.help = { 
name: "gif", 
description: "", 
usage: ""
} 