import { SlashCommandBuilder, CommandInteraction, Client } from 'discord.js'
import {lazyEmbed} from '../lazyEmbed.js';

const pastImages = []

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
        let cheeseImage = undefined
        while(cheeseImage==undefined || pastImages.includes(cheeseImage)){
            cheeseImage = (await(await fetch("https://cheese-thing.vercel.app/api")).json()).image
        }
        pastImages.push(cheeseImage)
        if(pastImages.length>10)pastImages.pop()

        await interaction.reply({content:cheeseImage,
            ephemeral:!(interaction.channel.name.includes("command")||interaction.channel.name.includes("bot")||interaction.channel.name=="cheese")});
	},
};