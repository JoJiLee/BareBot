module.exports = {
  name: "ruleImage",
  description: "rulesImage",

  execute(message, args, Discord) {
    if (message.member.roles.find(r => r.name === "𝗆𝖾")) {
      message.channel.send("https://discord.gg/9YAH6Kt");
    }
  }
}