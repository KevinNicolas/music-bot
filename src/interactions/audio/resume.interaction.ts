import { ExtraProperties } from "../../models";
import { CacheType, ChatInputCommandInteraction, EmbedBuilder } from "discord.js";

export const resumeInteraction = async (interaction: ChatInputCommandInteraction<CacheType>, { client, player }: ExtraProperties) => {
  const queue = player.getQueue(interaction.guild.id);

  if (!queue) {
    interaction.reply("There is no song to resume.");
    return;
  }

  queue.setPaused(false);
  const currentSong = queue.current;

  await interaction.reply({
    embeds: [
      new EmbedBuilder()
        .setDescription(`Playing **${currentSong.title}**`)
        .setThumbnail(currentSong.thumbnail)
        .setFooter({ text: `Duration: ${currentSong.duration}` }),
    ],
  });
};
