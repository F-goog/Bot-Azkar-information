const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('استجابة-البوت')
        .setDescription('يعطيك البينغ البوت'),

        async execute(interaction, client) {

            
            const Embed1 = new EmbedBuilder()
                .setTitle('⏱️ | سرعة الإستجابة')
                .addFields({ name: 'Ping', value: `**${client.ws.ping}ms**` }); // اضف الحقل كـ object



            await interaction.reply({embeds: [Embed1]})

        }

}