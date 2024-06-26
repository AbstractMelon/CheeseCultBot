import { SlashCommandBuilder, CommandInteraction, Client } from 'discord.js'
import {lazyEmbed} from '../lazyEmbed.js';

export default  {
	data: new SlashCommandBuilder()
		.setName('random-cheese')
		.setDescription('Replies with random cheese image'),
        /**
         * 
         * @param {CommandInteraction} interaction 
         * @param {Client} client
         */
	async execute(interaction, client) {
        let cheeseImage = (await(await fetch("https://cheese-thing.vercel.app/api")).json()).image
        await interaction.reply({content:cheeseImage,
            ephemeral:!(interaction.channel.name.includes("command")||interaction.channel.name.includes("bot")||interaction.channel.name=="cheese")});
	},
};