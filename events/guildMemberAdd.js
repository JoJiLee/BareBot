module.exports = (bot, member) => {
  
  console.log('User ' + member.user.username + ' has joined the server!')
    const channel = member.guild.channels.cache.find(ch => ch.name === 'πΌππΊπ');
    if (!channel) return;
    channel.send(`${member} huddles around the circle to stay warm. π‘οΈ`);
    var role = member.guild.roles.cache.get('550602949227839490');
  member.roles.add(role);
 
}