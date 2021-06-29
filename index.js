const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const config = require("./config.json");

bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();
var embed = new Discord.MessageEmbed();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
  });
});

bot.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(config.prefix)) {
        const args = message.content.slice(config.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if(!bot.commands.has(command)) return;

        try {
            bot.commands.get(command).run(bot, message, Discord, embed, args);

        } catch (error){
            console.error(error);
        }
    }
})

bot.login(process.env.token);