const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const sanitize = require("sanitize-filename");
const fs = require('fs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === `${config.prefix}Hi`) {
        msg.channel.send('Hello'); 
    }
  console.log(msg.content);

  // if(msg.content.startsWith(config.prefix)){
  //   const author = msg.author;
  //   const authorid = author.id;
    let filteredMsg = sanitize(msg.content);
    fs.readFile(`instruction/${filteredMsg}`, 'utf8', function(err, answer){
      if(answer!== undefined){
        msg.channel.send(answer);
      }
      // console.log(answer);
    });
  // }
});

client.login(config.token);

// 최상단에 추가 const { prefix, token } = require('./config.json');
// TOKEN 적용법 client.login(token); 
