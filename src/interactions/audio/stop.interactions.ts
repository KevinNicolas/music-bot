import { ExtraProperties } from "../../models";
import { CacheType, ChatInputCommandInteraction, EmbedBuilder } from "discord.js";

export const stopInteraction = async (interaction: ChatInputCommandInteraction<CacheType>, { client, player }: ExtraProperties) => {
  const queue = player.getQueue(interaction.guild.id);

  if (!queue) {
    interaction.reply("There is no song playing.");
    return;
  }

  queue.stop();
  interaction.reply("done!");
};
