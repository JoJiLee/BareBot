const Discord = require('discord.js');

module.exports = {
  name: 'ping',
  description: "says ping!",
    
  async run (bot, message, args){
        const ping = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`🏓\`${bot.ws.ping}\`ms`);
        message.channel.send(ping);
    }
}