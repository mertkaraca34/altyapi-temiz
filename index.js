const DisTube = require("distube")
const Discord = require("discord.js")
const fs = require("fs")
const config = require("./config.json")
const client = new Discord.Client();
require('./util/eventLoader')(client);
const db = require("quick.db")



///////////////////////////////////////////// => COMMANDS KLASORU OKUMA
client.config = require("./config.json")
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()


fs.readdir("./commands/", (err, files) => {
    let jsFiles = files.filter(f => f.split(".").pop() === "js")
    if (jsFiles.length <= 0) return console.log("Hiçbir komut bulunamadı!")
    jsFiles.forEach((file) => {
        let cmd = require(`./commands/${file}`)
        console.log(`Yüklendi ${file}`)
        client.commands.set(cmd.name, cmd)
        if (cmd.aliases) cmd.aliases.forEach(alias => client.aliases.set(alias, cmd.name))
    })
})



client.on('message', message =>{
    let prefix = db.fetch(`prefixd_${message.guild.id}`) && config.prefix;



    if (!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();
    let cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
    if (!cmd) return
    try {
        cmd.run(client, message, args)
    }
    catch (e) {
        console.error(e)
        message.reply("Error: " + e)
    }
})
 
///////////////////////////////////////////////////

client.on('message', async message =>{
    if(message.content === '!gir')
    {
      client.emit(
        "guildMemberAdd", 
      message.member || (await message.guild.fetchMember(message.author))
      );
    }
})








client.login(config.token)