import { ExtraProperties } from "../../models";
import { CacheType, ChatInputCommandInteraction, EmbedBuilder } from "discord.js";

export const pauseInteraction = async (interaction: ChatInputCommandInteraction<CacheType>, { client, player }: ExtraProperties) => {
  const queue = player.getQueue(interaction.guild.id);

  if (!queue) {
    interaction.reply("There is no song playing.");
    return;
  }

  const currentSong = queue.current;
  queue.setPaused(true);

  await interaction.reply({
    embeds: [
      new EmbedBuilder()
        .setDescription(`Paused **${currentSong.title}**`)
        .setThumbnail(currentSong.thumbnail)
        .setFooter({ text: `Duration: ${currentSong.duration}` }),
    ],
  });
};
