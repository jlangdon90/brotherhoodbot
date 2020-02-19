const Discord = require('discord.js');
const client = new Discord.Client();
const {token, prefix} = require('./config.json');

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
    if (msg.content === prefix + 'ping') {
        msg.reply('Pong!');
        console.log('Replied!')
    }
});

client.login(process.env.DISCORD_TOKEN || token)
console.log(process.env.DISCORD_TOKEN)