module.exports = (bot, member) => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'πΌππΊπ');
    if (!channel) return;
    channel.send(`${member} drowned in the arctic ocean. π`);
}