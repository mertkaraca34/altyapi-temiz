const Discord = require('discord.js')
const client = new Discord.Client();
module.exports = ready =>{

    let sunucular = client.guilds.cache.size;
    let kullanicilar = client.users.cache.size;
    
    console.log(`Komutlar yüklendi`)

}