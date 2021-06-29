const Discord = require("discord.js");

module.exports = {
  name: "info",
  description: "info on bot",

  async run(bot, message, args) {
    var version = "2.6.9";
    const infoEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Info")
      .setDescription("Okay Facts")
      .addFields(
        {name: "Creator", value: "Polr#0001", inline: true},
        {name: "Version", value: version, inline: true}
        )
      .addField('\u200b', '\u200b')
      .addFields(
        {name: "Twitch", value: "[PolrJL](https://www.twitch.tv/polrJL)", inline: true},
        {name: "Server Info", value: "[𝖳𝗁𝖾 𝖠𝗋𝖼𝗍𝗂𝖼](https://discord.gg/9YAH6Kt)", inline: true},
        )
      .setImage(
        "https://i.pinimg.com/originals/5a/1b/96/5a1b96a8ffed246faaf07a07838b3387.png"
      )
      .setFooter("Check Polr out on twitch!");
    message.channel.send(infoEmbed);
  }
};
