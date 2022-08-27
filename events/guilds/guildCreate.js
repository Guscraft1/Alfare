const { EmbedBuilder } = require('discord.js');

// Invitation en cas de problème
// Bouton sous log pour kick le bot (si mauvais serveur) => Faire une whitelist ?

module.exports = {
    name: 'guildCreate',
    once: false,
    async execute(client, guild){
        await client.createGuild(guild);

        const generalLogChannel = client.channels.cache.get('1013014898810290236');

        const embed = new EmbedBuilder()
            .setAuthor({ name: client.user.tag, iconURL: client.user.displayAvatarURL() })
            .setColor('#32c400')
            .setDescription(`**${client.user} a rejoint ce serveur \`${guild.name}\`.**
            `)
            .setTimestamp()
            .setFooter({ text: `Id du serveur : ${guild.id}`, iconURL: guild.iconURL() })
    
        generalLogChannel.send({ embeds: [embed] });
    }
};