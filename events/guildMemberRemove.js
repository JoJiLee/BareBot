module.exports = (bot, member) => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '𝖼𝗁𝖺𝗍');
    if (!channel) return;
    channel.send(`${member} drowned in the arctic ocean. 💀`);
}