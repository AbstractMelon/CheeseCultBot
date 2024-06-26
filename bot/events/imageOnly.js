import { Client } from 'discord.js'

/**
 * 
 * @param {Client} client
 */
export default function(client){
    client.on("messageCreate", (msg)=>{
        if(msg.author.bot==true)return;

        if(msg.channel.name!="cheese")return;
        if(msg.attachments.size>0)return;
        msg.delete()
    })
}