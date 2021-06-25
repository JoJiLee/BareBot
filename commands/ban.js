module.exports = {
  name: 'ban',
  description: 'ban someone',
 
  execute(message, args, Discord){
        
    if(message.member.roles.find(r => r.name === "𝗆𝖾")){
      if(!args[1]) message.channel.send('Error please specify a person')
      
      const member = message.mentions.members.first();
      
      if(member){
        member.ban('You have been banned.').then(() =>{
          message.reply(member.displayName + ' has been banned.')
        }).catch(err =>{
          message.reply("Unable to ban member").then(msg => msg.delete(10000));
          console.log(err);
        });
      } else {
        message.reply("That user isn\'t in this server").then(msg => msg.delete(10000)); 
      }
    } else {
      return message.channel.send("YOU DON'T HAVE PERMISSION TO BAN").then(msg => msg.delete(10000)); 
    }   
  }
}