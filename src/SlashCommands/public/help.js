const { SlashCommandBuilder, EmbedBuilder , ButtonBuilder, ButtonStyle , ActionRowBuilder , StringSelectMenuBuilder, StringSelectMenuOptionBuilder,} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('مساعدة')
        .setDescription('لرؤية أوامر البوت'),

        async execute(interaction, client) {
            const EmbedHelp = new EmbedBuilder()
            .setTitle('بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ')
            .setDescription('أول بوت إسلامي متكامل في الشرق الأوسط في ديسكورد ويتضمن جميع الميزات التي تساعد المسلمين على العبادة ، وإحياء سنة ذكر الله')
            .setImage('https://i.imgur.com/FWKAsGd.png')
            .setThumbnail('https://i.imgur.com/52BaelM.png')
            .setFooter({text: 'شكراً لإستخدام فاذكروني بوت', iconURL: 'https://i.imgur.com/52BaelM.png'});
           

            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setEmoji('<:tools:1137110260046364683>')
                        .setStyle('Link')
                        .setURL('https://discord.gg/nCXHmV6Z9y'),
                    new ButtonBuilder()
                        .setEmoji('<:website_:1218220985929695252>')
                        .setLabel('موقعنا')
                        .setStyle('Link')
                        .setURL('https://fazkrony.com/'),
                    new ButtonBuilder()
                        .setEmoji('<:fdr:1137110228429721600>')
                        .setLabel('اضافة البوت')
                        .setStyle('Link')
                        .setURL('https://discord.com/api/oauth2/authorize?client_id=728782652454469662&permissions=8&scope=bot%20applications.commands')
                );
            const select = new StringSelectMenuBuilder()
                    .setCustomId('starter')
                    .setPlaceholder('اختار فئة الاوامر الذي تريد معرفته')
                    .addOptions(
                        new StringSelectMenuOptionBuilder()
                            .setLabel('Bulbasaur')
                            .setDescription('The dual-type Grass/Poison Seed Pokémon.')
                            .setValue('bulbasaur'),
                        new StringSelectMenuOptionBuilder()
                            .setLabel('Charmander')
                            .setDescription('The Fire-type Lizard Pokémon.')
                            .setValue('charmander'),
                        new StringSelectMenuOptionBuilder()
                            .setLabel('Squirtle')
                            .setDescription('The Water-type Tiny Turtle Pokémon.')
                            .setValue('squirtle'),
                    );
            const select1 = new ActionRowBuilder()
                .addComponents(select);
        


            await interaction.reply({ embeds: [EmbedHelp] , components: [select1,row] , content: '||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|||||||||||| https://discord.com/application-directory/728782652454469662'});

        }

}