import { CacheType, ChatInputCommandInteraction, EmbedBuilder } from "discord.js";

import { ExtraProperties } from "../../../models";
import { createEmbedMessage } from "../../../utils";

import { createQueue, searchPlaylistByUrl, searchSongByUrl } from "./utils";

export const handlePlayInteractions = async (interaction: ChatInputCommandInteraction<CacheType>, { player, client }: ExtraProperties) => {
  const url: string = interaction.options.getString("url");
  const playlistUrl: string = interaction.options.getString("playlist");

  const queue = createQueue({ interaction, player });

  if (!queue.connection) {
    const guild = client.guilds.cache.get(interaction.guild.id);
    const member = guild.members.cache.get(interaction.member.user.id);
    const voiceChannel = member.voice.channel;

    await queue.connect(voiceChannel);
  }

  let song = null;

  if (url) song = await searchSongByUrl({ client, interaction, player, url });
  else if (playlistUrl) song = await searchPlaylistByUrl({ client, interaction, player, playlistUrl });

  if (!song) return;

  if (Array.isArray(song)) queue.addTracks(song);
  else queue.addTrack(song);

  let currentSong = queue.current;
  if (!Array.isArray(song)) currentSong = song;
  const embed = createEmbedMessage({ duration: currentSong.duration, thumbnail: currentSong.thumbnail, title: currentSong.title, url: currentSong.url });

  if (!queue.playing) await queue.play();

  await interaction.reply({
    embeds: [embed],
  });
};
