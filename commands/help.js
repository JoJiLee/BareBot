module.exports = {
  name: 'help',
  description: "Commands List",
  
  execute(message, args, Discord){
            const helpEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Commands')
            .setURL('https://www.twitch.tv/polrjl')
            .setDescription('List of Commands')
            .addFields(
              {name: 'help', value: 'Shows commands'},              
              {name: 'bare', value: 'We Bare Bear Gifs'},
              {name: 'fortnite', value: 'Fork Knife'},
              {name: 'info version', value: 'Show bot version'},
              {name: 'kick', value: 'Kicks people (mods+ only)'},
              {name: 'ban', value: 'Bans people (admin+ only)'},
              {name: 'ping', value: 'Pong!'},
              {name: 'avatar', value: 'Grabs an avatar'} 
            )
            .setImage('https://i.imgur.com/vUW8IVd.jpg')
            .setFooter('Check Polr out on twitch!');
            message.channel.send(helpEmbed);
    }
}