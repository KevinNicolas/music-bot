import { CacheType, ChatInputCommandInteraction } from "discord.js";

export const PingInteraction = async (interaction: ChatInputCommandInteraction<CacheType>) => {
  await interaction.reply("PONG LA CONCHA DE TU MADRE!");
};
