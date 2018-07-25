const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


module.exports.run = async (client, message, args, ops, level) => { // eslint-disable-line no-unused-vars
  if (args.length < 1) {
    message.channel.send('You must provide some text to emojify!');
}
message.channel.startTyping();
message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
  );
  message.channel.stopTyping(true);
  message.delete()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "emojify",
  category: "Miscelaneous",
  description: "Says your text in big LETTERS",
  usage: "emojify [text]"
};
