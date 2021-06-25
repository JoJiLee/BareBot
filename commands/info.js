module.exports = {
  name: 'info',
  description: 'info on bot',
 
  execute(message, args){
  var version = '1.6.9';
  if(args[1] === 'version'){
    message.channel.send("Version " + version);
  }else{
    message.channel.send('Invalid Args')
      }
  }
}