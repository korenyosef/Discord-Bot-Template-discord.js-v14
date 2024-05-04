```
# Discord Bot Template (discord.js v14)

This is a Discord bot template built using Discord.js version 14. It provides a basic structure for creating Discord bots with slash commands.

## Installation

To use this template, follow these steps:

1. Clone this repository to your local machine.
2. Install the required packages by running the following command in your terminal:

```bash
npm install discord.js discord-api-types @discordjs/rest dotenv chalk@4.1.2
```

## Setup

1. Create a `.env` file in the root directory of your project.
2. Add the following line to the `.env` file:

```
TOKEN=YOUR_DISCORD_TOKEN
```

To get a Discord token, you need to create an application on the [Discord Developer Portal](https://discord.com/developers/applications).

## Adding Commands

To add a new command:

1. Create a file named `COMMAND_NAME.js` in the `/src/commands/CATEGORY/` directory, where `COMMAND_NAME` is the name of your command and `CATEGORY` is the category of your command.
2. Add the following code to the `COMMAND_NAME.js` file:

```javascript
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('COMMAND_NAME')
    .setDescription('COMMAND_DESCRIPTION'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });
        const msg = 'THE_MESSAGE_YOU_WANT_TO_SEND';
        await interaction.editReply({
            content: msg
        });
    }
};
```

For example, to specify a simple ping command, create a file named `ping.js` in the `/src/commands/tools` directory with the following content:

```javascript
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping Command!'),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });
        const msg = `API Latency: ${client.ws.ping} \nClient ping: ${message.createdTimestamp - interaction.createdTimestamp}`;
        await interaction.editReply({
            content: msg
        });
    }
};
```

## Running the Bot

To run the bot, execute the following command:

```bash
npm run start
```


## Credits

This template is inspired by [Fusion Terror's YouTube tutorial](https://youtu.be/6IgOXmQMT68). Special thanks to Fusion Terror for the inspiration!

```