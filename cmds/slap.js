const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

var slap = [
        "https://media.giphy.com/media/26uf3m46sDFVPedig/giphy.gif",
        "https://media.giphy.com/media/s5zXKfeXaa6ZO/giphy.gif",
        "https://media.giphy.com/media/gSIz6gGLhguOY/giphy.gif",
        "https://media.giphy.com/media/3XlEk2RxPS1m8/giphy.gif",
        "https://media.giphy.com/media/j3iGKfXRKlLqw/giphy.gif",
        "https://media.giphy.com/media/d3MKAN1sWm3VMSRy/giphy.gif",
        "https://media.giphy.com/media/xULW8nNDLNVlBY77dm/giphy.gif",
        "https://media.giphy.com/media/F0E72ofVJFEGc/giphy.gif",
        "https://media.giphy.com/media/3vDS40HZxJwFGTbXoI/giphy.gif",
        "https://media.giphy.com/media/IAAXyr5GU73xK/giphy.gif",
        "https://media.giphy.com/media/C8aZ7N7KZyBd6/giphy.gif",
        "https://media.giphy.com/media/xUA7b9Wc1uaT52QfO8/giphy.gif",
        "https://media.giphy.com/media/gfkETzKFBSkBW/giphy.gif",
        "https://media.giphy.com/media/uG3lKkAuh53wc/giphy.gif",
        "https://media.giphy.com/media/zvDT09xBhcuMo/giphy.gif",
        "https://media.giphy.com/media/IYcXTDme1ZPMI/giphy.gif",
        "https://media.giphy.com/media/z4toQK5UVI61W/giphy.gif",
        "https://media.giphy.com/media/etHUmA91GfDS8/giphy.gif",
        "https://media.giphy.com/media/bGnQmK38QoSg8/giphy.gif",
        "https://media.giphy.com/media/Ji03RBamoDhtK/giphy.gif",
]
var embed = new Discord.RichEmbed()
        .setDescription(`Random Image Slap !`)
        .setImage(slap[Math.floor(Math.random() * slap.length)])
.setColor("#ec0000")
message.channel.send(embed)


}

exports.help = {
  name: "slap"
}
