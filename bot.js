const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});
client.on('message', message => {
    if (message.content === 'help') {
    	message.reply('These are the current commands I support: `help` `ping`');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDAyNDE0OTg0Njc3Njg3Mjk2.DT4dww.gFA0vwYeuTndwVXG4yERG_zryQI);
