module.exports = {
  name: 'kick',
  description: 'kick someone',
 
  execute(message, args, Discord){
        
    if(message.member.roles.cache.find(r => r.name === "𝖻𝖺𝗋𝖾 🐻")){
      if(!args[1]) message.channel.send('Error please specify a person')
      
      const member = message.mentions.members.first();
      
      if(member){
        member.kick('You have been kicked.').then(() =>{
          message.reply(member.displayName + ' has been kicked.')
        }).catch(err =>{
          message.reply("Unable to kick member").then(msg => msg.delete(10000));
          console.log(err);
        });
      } else {
        message.reply("That user isn\'t in this server").then(msg => msg.delete(10000)); 
      }
    } else {
      return message.channel.send("YOU DON'T HAVE PERMISSION TO KICK").then(msg => msg.delete(10000)); 
    }   
  }
}