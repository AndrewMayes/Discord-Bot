const {RichEmbed} = require('discord.js');
module.exports = message => {
  //Creates embed which describes bot's commands
  const embed = new RichEmbed()
    .setTitle("AndrewBot Commands")
    .setColor(16776960)
    .setURL("https://github.com/AndrewMayes/Discord-Bot")
    .setThumbnail("https://cdn.discordapp.com/avatars/167409047119593472/a86278e1a4a3eb0d46af9d82a9239653.png?size=2048")
    .setAuthor("AndrewBot", "https://cdn.discordapp.com/avatars/167409047119593472/a86278e1a4a3eb0d46af9d82a9239653.png?size=2048")
    .addField("!help", "List bot commands", true)
    .addField("!kick [@user]", "Kick user", true)
    .addField("!avatar", "Send link to your avatar", true)
    .addField("!ping", "Pong!", true)

  message.channel.send(embed)
}