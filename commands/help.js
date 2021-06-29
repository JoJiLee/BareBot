const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: "Commands List",
  
  async run(bot, message, args){
            const helpEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Twitch')
            .setURL('https://www.twitch.tv/polrjl')
            .setDescription('List of Commands')
            .addFields(
              {name: 'avatar', value: 'Grabs Avatar', inline: true},
              {name: 'bare', value: 'We Bare Bear Gif', inline: true}
              )
            .addFields(
              {name: 'info', value: 'Bot Version', inline: true},
              {name: 'help', value: 'Show Commands', inline: true}
              )
            .addFields(
              {name: 'fortnite', value: 'Fork Knife Gif', inline: true},
              {name: 'ping', value: '🏓 Pong!', inline: true}
            )
            .setImage('https://i.pinimg.com/originals/9e/ce/26/9ece267c7ba76a83cf134a68010ef437.png')
            .setFooter('Check Polr out on twitch!');
            message.channel.send(helpEmbed);
    }
}