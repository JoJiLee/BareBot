module.exports = {
  name: 'ping',
  description: "says ping!",
    
  execute(message, args, Discord, bot){
        const ping = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`🏓\`${bot.ws.ping}\`ms`);


        message.channel.send(ping);
    }
}