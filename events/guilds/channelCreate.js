const { EmbedBuilder } = require('discord.js');

// Ajouter qui a accès au salon lors création (car perms catégorie ou quand créer salon)

module.exports = {
    name: 'channelCreate',
    once: false,
    async execute(client, channel){
        const fetchGuild = await client.getGuild(channel.guild);
        const logChannel = client.channels.cache.get(fetchGuild.logChannel);
        if (logChannel == undefined) return;

        if (channel.type === 4) {
            const embedCategorie = new EmbedBuilder()
                .setTitle(`Création d'une catégorie`)
                .setColor('#009ECA')
                .setDescription(`**La catégorie \`${channel.name}\` a été créé**.
                > **Id :** \`${channel.id}\`
                `)
                .setTimestamp()
                .setFooter({ text: channel.guild.name, iconURL: channel.guild.iconURL() })
        
            logChannel.send({ embeds: [embedCategorie] });
        } else {
            const embed = new EmbedBuilder()
                .setTitle(`Création d'un salon`)
                .setColor('#009ECA')
                .setDescription(`**${channel} a été créé**.
                > **Nom :** \`${channel.name}\`
                > **Id :** \`${channel.id}\`
                > **Catégorie :** ${channel.parent}
                > **Type :** \`${channelType()}\`
                `)
                .setTimestamp()
                .setFooter({ text: channel.guild.name, iconURL: channel.guild.iconURL() })
        
            logChannel.send({ embeds: [embed] });
        }

        function channelType() {
            switch (channel.type) {
                case 0 :
                    return 'Textuel';
                case 2 :
                    return 'Vocal';
            }
        }
    }
};