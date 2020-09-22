const Discord = require("discord.js")
const db = require('quick.db')
module.exports = {
  name: "help",
  isim:'yardım',
  aliases: ["h", "cmd", "command",'yardım'],
  run: async (client, message, args) => {

    var dil = await db.get(`dil_${message.guild.id}`)

    if(dil === 'en_US')
    {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Commands`)
      .setDescription(client.commands.map(cmd => `\`${cmd.name}\``).join(", "))
      .setTimestamp()
    message.channel.send(embed)
    }else if(dil === 'tr_TR'){
      let embed = new Discord.MessageEmbed()
      .setTitle(`Komutlar`)
      .setDescription(client.commands.map(cmd => `\`${cmd.isim}\``).join(", "))
      .setTimestamp()
    message.channel.send(embed)
    }


  }
}
