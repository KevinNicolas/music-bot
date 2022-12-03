import { CacheType, ChatInputCommandInteraction } from "discord.js";

export const helpInteraction = async (interaction: ChatInputCommandInteraction<CacheType>) => {
  interaction.reply("In the next version =)");
};
