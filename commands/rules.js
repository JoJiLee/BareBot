module.exports = {
  name: "rules",
  description: "rules",

  execute(message, args, Discord) {
   if (message.member.roles.find(r => r.name === "𝗆𝖾")) {
      const rulesEmbed = new Discord.MessageEmbed()
        .setColor("0xfeffff")
        .setTitle("")
        .setDescription("")
        .addFields(
          {name: "1) Don't be annoying", value: "It's quite simple. Just don't be annoying."},
          {name: ") Do NOT ask for higher roles",value:"By asking for a higher role, you will NOT get a higher role."},
          { name: "3) Keep chat clean", value: "No NSFW material in #𝖼𝗁𝖺𝗍" },
          { name: "4) Have fun and be an epic gamer", value: "Chill and Relax" }
        );
      message.channel.send(rulesEmbed);
    }
  }
}