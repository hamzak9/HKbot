const Discord = require('discord.js');
const client = new Discord.Client();

client.login('NDkwMzcyMTU4MjIxMDU4MDQ4.W5yEqQ.7oYtnGP5EFSaKZYZrWZAL9aRMrE');


function main(){
    client.on('ready',readyDiscord);
    client.on('ready',sendMsg);

}
function sendMsg(){
    client.channels.cache.get('471505554087346196').send('@oxyliary#0093 hop on');
    client.channels.cache.get('471505554087346196').send('@oxyliary#0093 hop on');
    client.channels.cache.get('471505554087346196').send('@oxyliary#0093 hop on');

}
function readyDiscord(){
    console.log('ready');
}
main();

