const Discord = require('discord.js');

module.exports = {
  name: 'fortnite',
  description: "says fork knife",
    
  async run(bot,message, args, Discord){
        message.channel.send('fork knife');
    const cheerio = require('cheerio');
    const request= require('request');
    
    var options = {
        url: "https://www.dogpile.com/serp?qc=images&q=fortnite+gif&sc=fqDnxRQzOJ1Z00",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
 
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
        $ = cheerio.load(responseBody);
 
        var links = $(".image a.link");
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {     
            return;
        }
      
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
    }
}