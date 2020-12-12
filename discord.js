const Discord = require('discord.js');
const client = new Discord.Client();

client.login('TOKEN_HERE');


function main(){
    client.on('ready',readyDiscord);
    client.on('message',gotMessage)

}

function gotMessage(msg){
    if(msg.content === 'queue the crickets'){
        client.channels.cache.get('471505554087346196').send('!play https://www.youtube.com/watch?v=17Jq0QqK4k0');

    }
}

function readyDiscord(){
    console.log('ready');
}
main();

