const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('عدد-مسلمين')
        .setDescription('لمعرفة عدد مسلمين في العالم'),


        async execute(interaction, client) {

            const EmbedADD = new EmbedBuilder()
                .setAuthor({ name: 'عدد المسلمين حول العالم'})
                .setTitle('2,024,359,240')
                .setDescription('اليوم الموافق الأحد، ١٧ مارس ٢٠٢٤ م، تشير التقديرات إلى أن عدد المسلمين حول العالم هو 2,024,359,240 شخصًا يمثل نفسه كمسلم، وهو ما يمثل أكثر من 25% من إجمالي عدد سكان العالم البالغ 8,097,436,961. في وقتنا الحاضر الإسلام هو ثاني أكبر ديانة في العالم. حيث ان الإسلام هو جزء من النظام الرسمي في 26 دولة في آسيا وإفريقيا والشرق الأوسط وأفريقيا. والملاحظ خلال العقود الأخيرة ان نمو الإسلام أسرع من نمو أي ديانة اخرى في جميع أنحاء العالم.')
                .setThumbnail('https://i.imgur.com/UmPaBRt.png')
                .setFooter({text: 'فاذكروني بوت', iconURL: 'https://i.imgur.com/52BaelM.png'});
            await interaction.reply({embeds: [EmbedADD]})

        }

}