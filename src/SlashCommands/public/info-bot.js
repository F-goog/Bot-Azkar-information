const { SlashCommandBuilder, EmbedBuilder , ActionRowBuilder , ButtonBuilder }  = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('معلومات-بوت')
        .setDescription('لمعرفة معلومات البوت'),

        async execute(interaction, client) {

            const EmbedINFO = new EmbedBuilder()
                .setTitle('فأذكروني')
                .setThumbnail('https://i.imgur.com/52BaelM.png')
                .addFields(
                    { name: 'أصدار' , value: 'v6.0.0' , inline: true },
                    { name: 'شارد' , value: '9' , inline: true },
                    { name: 'مكتبة' , value: '`Discord.js`' , inline: true},
                    { name: 'سيرفرات', value: `${client.guilds.cache.size}`, inline: true}
                )
                .setFooter({ text: 'Server Shard 9 | Shards 13 | discord.js ^14.13.0', iconURL: 'https://i.imgur.com/52BaelM.png' });

            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setEmoji('<:star:1137110232221368442>')
                        .setLabel(' اضافة البوت لسيرفرك')
                        .setStyle('Link')
                        .setURL('https://discord.com/api/oauth2/authorize?client_id=728782652454469662&permissions=8&scope=bot%20applications.commands'),
                    new ButtonBuilder()
                        .setEmoji('<:superstar:1137110266396541118>')
                        .setLabel('سيرفر دعم الفني')
                        .setStyle('Link')
                        .setURL('https://discord.gg/nCXHmV6Z9y')
                    
                );
            await interaction.reply({embeds: [EmbedINFO] , components: [row] })

        }

}