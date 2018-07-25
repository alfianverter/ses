const Discord = require("discord.js");
const economy = require('discord-eco');

exports.run = async (bot, message, args) => {

          if (!message.member.permissions.has("ADMINISTRATOR")) {
          message.channel.send('You do not have ``ADMINISTRATOR`` permissions');
          message.delete();
          return;
        }
        if (!args[0]) {
            message.channel.send(`**You need to define an amount. Usage: c.addbalance <amount> <user>**`);
            return;
        }

        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**The amount has to be a number. Usage: c.addbalance <amount> <user>**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
        }

        // Check if they defined a user
        let defineduser = '';
        if (!args[1]) { // If they didn't define anyone, set it to their own.
            defineduser = message.author.id;
        } else { // Run this if they did define someone...
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned.id;
        }

        // Finally, run this.. REMEMBER IF you are doing the guild-unique method, make sure you add the guild ID to the end,
        economy.updateBalance(defineduser + message.guild.id, parseInt(args[0])).then((i) => { // AND MAKE SURE YOU ALWAYS PARSE THE NUMBER YOU ARE ADDING AS AN INTEGER
            message.reply(`**User defined had ${args[0]} added from their account.**`)
        });

    }

exports.help = {
  name: "addbalance"
}
