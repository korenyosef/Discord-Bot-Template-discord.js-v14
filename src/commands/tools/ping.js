const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping Command!'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        })
        const msg = `API Latency: ${client.ws.ping} \nClient ping: ${message.createdTimestamp - interaction.createdTimestamp}`
        await interaction.editReply({
            content: msg
        })
    }
}