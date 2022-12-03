import { ExtraProperties } from "../../../../models";
import { QueryType, Track } from "discord-player";
import { CacheType, ChatInputCommandInteraction } from "discord.js";

interface SearchSongByUrlProps {
  interaction: ChatInputCommandInteraction<CacheType>;
  url: string;
}

export const searchSongByUrl = async ({ player, interaction, url }: ExtraProperties & SearchSongByUrlProps): Promise<Track | null> => {
  const result = await player.search(url, {
    requestedBy: interaction.user,
    searchEngine: QueryType.YOUTUBE_VIDEO,
    blockExtractor: true,
  });

  if (result.tracks.length <= 0) {
    await interaction.reply("no results found");
    return null;
  }

  const song = result.tracks[0];
  return song;
};
