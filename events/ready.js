module.exports = (bot) => {
    console.log('I am alive');
    bot.user.setActivity('We Bare Bears | !help', {type:'WATCHING'}).catch(console.error);
}