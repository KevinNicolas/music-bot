import { EmbedBuilder } from "discord.js";

interface CreateEmbedMessageProperties {
  title: string;
  url: string;
  thumbnail: string;
  duration: string;
}

export const createEmbedMessage = ({ duration, thumbnail, title, url }: CreateEmbedMessageProperties) => {
  const embed = new EmbedBuilder();
  embed
    .setDescription(`Added **[${title}](${url})** to the queue`)
    .setThumbnail(thumbnail)
    .setFooter({ text: `Duration ${duration}` });

  return embed;
};
