const kick = require('../commands/kick')
const help = require('../commands/help')
const ping = require('../commands/ping')
const avatar = require('../commands/avatar')
const {Attachment, RichEmbed} = require('discord.js')
const {TextChannel} = require('discord.js')

module.exports = (client, message) => {
  if (message.content.startsWith('!kick')) {
    return kick(message)
  }
  if (message.content === '!help') {
    return help(message)
  }
  if (message.content === '!ping') {
    return ping(message)
  }

  if (message.content === '!avatar') {
    return avatar(message)
  }
}