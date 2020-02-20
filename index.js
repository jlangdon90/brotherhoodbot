//local config options
const { prefix } = require('./config.json');
const connectionString = process.env.DATABASE_URL

//Discord bot setup
const Discord = require('discord.js');
const bot = new Discord.Client();

//PG database setup
const { Client } = require('pg');
const dbClient = new Client({
    connectionString: connectionString
})
dbClient.connect();
dbClient.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    dbClient.end()
})

//trying out initial bot code
bot.once('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`);
});

bot.on('message', msg => {
    if (msg.content === prefix + 'ping') {
        msg.reply('Pong!');
        console.log('Replied!')
    }
    if (msg.content === prefix + 'oeffler') {
        msg.reply('Oeffler is one of our magical founders!');
        console.log('Replied!')
    }
});

//bot connection
bot.login(process.env.DISCORD_TOKEN || 'Njc5Nzk0ODg0MTcyODQxMDMx.Xk7BVQ.6oWYHzwvHczux3tNLGCmjeX50yg')


//need to build Twitch API helper here