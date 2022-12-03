import { ExtraProperties } from "../../models";
import { CacheType, ChatInputCommandInteraction, EmbedBuilder } from "discord.js";

export const skipInteraction = async (interaction: ChatInputCommandInteraction<CacheType>, { client, player }: ExtraProperties) => {
  const queue = player.getQueue(interaction.guild.id);

  if (!queue) {
    interaction.reply("There is no song playing.");
    return;
  }

  const currentSong = queue.current;
  queue.skip();

  await interaction.reply({
    embeds: [
      new EmbedBuilder()
        .setDescription(`Skipped **${currentSong.title}**`)
        .setThumbnail(currentSong.thumbnail)
        .setFooter({ text: `Duration: ${currentSong.duration}` }),
    ],
  });
};
