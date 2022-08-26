const { EmbedBuilder } = require('discord.js');

// Ajouter Plus d'informations sur le message ?
// Notamment qui l'a modif (si possible) + Attention au null au démarrage du bot pour l'ancien message
// **Attention** à la longueur maximum de message (afficher que le début) car renvoie des erreurs

module.exports = {
    name: 'messageUpdate',
    once: false,
    async execute(client, oldMessage, newMessage){
        const fetchGuild = await client.getGuild(newMessage.guild);
        const logChannel = client.channels.cache.get(fetchGuild.logChannel);
        const oldContentMessage = oldMessage.content;
        const newContentMessage = newMessage.content;

        if ((oldContentMessage === null || oldContentMessage.length <= 1024) && newContentMessage.length <= 1024) {
            const embed = new EmbedBuilder()
                .setAuthor({ name: newMessage.author.tag, iconURL: newMessage.author.displayAvatarURL() })
                .setColor('#009ECA')
                .setDescription(`**Message envoyé par <@${newMessage.author.id}> modifié dans ${newMessage.channel}.**. [Aller au message.](${newMessage.url})
                `)
                .addFields([
                    {name: `\`🔅\` - Ancien - \`🔅\``, value: `\`\`\`${oldContentMessage}\`\`\``},
                    {name: `\`🔅\` - Nouveau - \`🔅\``, value: `\`\`\`${newContentMessage}\`\`\``}
                ])
                .setTimestamp()
                .setFooter({ text: newMessage.guild.name, iconURL: newMessage.guild.iconURL() })

            logChannel.send({ embeds: [embed] });
        }
    }
};