var math = require('mathjs');

module.exports.run = (bot, message, args, ops, command) => {
    console.log(`[${message.author.tag}] [${message.author.id}] did command [${command}.js]`)
    let input = args.join(" ");
    if (!input) {
        message.reply('__You must provide a equation to be solved on the calculator!__');
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.reply(`**Invalid math equation:** ${err}`);
    }

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png")
        .setColor('RANDOM')
        .addField("**Question:**", question, true)
        .addField("**Answer:**", answer)

    message.channel.send({
        embed
    })
};

module.exports.help = { 
name: "calculator", 
description: "", 
usage: ""
} 