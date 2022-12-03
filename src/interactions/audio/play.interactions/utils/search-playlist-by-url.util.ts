import { ExtraProperties } from "../../../../models";
import { QueryType } from "discord-player";
import { CacheType, ChatInputCommandInteraction } from "discord.js";

interface SearchPlaylistByUrl {
  interaction: ChatInputCommandInteraction<CacheType>;
  playlistUrl: string;
}

export const searchPlaylistByUrl = async ({ interaction, player, playlistUrl }: SearchPlaylistByUrl & ExtraProperties) => {
  const result = await player.search(playlistUrl, {
    requestedBy: interaction.user,
    searchEngine: QueryType.YOUTUBE_PLAYLIST,
    blockExtractor: true,
  });

  if (result.tracks.length <= 0) {
    await interaction.reply("no results found");
    return null;
  }

  const songs = result.tracks;
  return songs;
};
