const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  async function purge() {
      let insert = args.join(" ");
      if (!message.member.permissions.has("MANAGE_MESSAGES")) {
          message.channel.send('You do not have ``Manage Messages`` permissions \n to use the command: `CLEAR`');
          message.delete();
          return;
      }

      if (!insert) {
          message.channel.send('🚫 usage : `>clear <1 - 400>`');
          message.delete();
          return;
      }
    
      if (insert > 100) {
         message.channel.send("I just can delete 100 message")
      }
    
      const fetched = await message.channel.fetchMessages({limit: insert});
      console.log(fetched.size + ' messages found, deleting...');

      message.channel.bulkDelete(fetched)
          .catch(error => message.channel.send('there is no `permission` to perform the deletion'));
     let embed = new Discord.RichEmbed()
         .setTitle('Clean! :put_litter_in_its_place:  ')
         .setDescription(`${insert} messages deleted.`)
.setColor("#ec0000")
.setFooter('©BETA | By: VERTER | 2018')
     message.channel.send(embed)
     message.delete();
  }

  purge();
}

exports.help = {
  name: "clear"
}
