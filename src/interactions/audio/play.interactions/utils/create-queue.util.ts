import { Player } from "discord-player";
import { CacheType, ChatInputCommandInteraction } from "discord.js";

export const createQueue = ({ interaction, player }: { interaction: ChatInputCommandInteraction<CacheType>; player: Player }) => {
  const queue = player.createQueue(interaction.guild, {
    leaveOnEndCooldown: 120 * 1000,
    leaveOnEmptyCooldown: 120 * 1000,
  });

  return queue;
};
