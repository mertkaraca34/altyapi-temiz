const Discord = require('discord.js');
const randomanime = require('random-anime')

module.exports = {
    name:'anime',
    aliases:['anime'],
    run: async(client, message, args) =>{
        const anime = randomanime.anime()

        var embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
        .setColor('RANDOM')
        .setTitle(`Random anime`)
        .setImage(anime,)




     



        message.channel.send(embed)




    }
}