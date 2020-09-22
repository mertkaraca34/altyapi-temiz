const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const db =require('quick.db')

module.exports = guildMemberAdd =>{

    let kanal = db.get(`hgkanal_${message.guild.id}`, kanal.id)

    let embed = new Discord.MessageEmbed()
    .setTitle(`Yeni üye`)
    .setColor('YELLOW')
    .addField(`Sunucumuza yeni birisi katıldı`, member.user.tag)
    .setTimestamp()
    .setFooter(`Hoş geldin :)`)
    kanal.send()
}
