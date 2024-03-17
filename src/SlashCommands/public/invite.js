const { SlashCommandBuilder, EmbedBuilder , ButtonBuilder, ButtonStyle , ActionRowBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('دعوة-بوت')
        .setDescription('دعوة البوت في سيرفرك'),


        async execute(interaction, client) {
            const Embed1 = new EmbedBuilder()
                .setTitle('شكراً على أختيارك بوت فاذكروني 🌹')
                .setColor('#00ffd5')

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

            await interaction.reply({embeds: [Embed1] , components: [row] })
             
        }
}