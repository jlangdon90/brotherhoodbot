//local config options
const {token, prefix, databaseUrl} = require('./config.json');
const connectionString = process.env.DATABASE_URL || databaseUrl

//Discord bot setup
const Discord = require('discord.js');
const bot = new Discord.Client();

//PG database setup
const { Pool, Client } = require('pg');
const dbClient = new Client({
    connectionString: connectionString
})
dbClient.connect();
dbClient.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    dbClient.end()
})


bot.once('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`);
});

bot.on('message', msg => {
    if (msg.content === prefix + 'ping') {
        msg.reply('Pong!');
        console.log('Replied!')
    }
});

bot.login(process.env.DISCORD_TOKEN || token)