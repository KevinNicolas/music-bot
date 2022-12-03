import { Interaction, CacheType } from "discord.js";

import { CommandNames, ExtraProperties } from "../models";

import { PingInteraction } from ".";
import { handlePlayInteractions, pauseInteraction, resumeInteraction, skipInteraction, stopInteraction } from "./audio";
import { helpInteraction } from "./help.interactions";

export const handleInteractions = (properties: ExtraProperties) => async (interaction: Interaction<CacheType>) => {
  if (!interaction.isChatInputCommand()) return;
  type InteractionHandleType = Record<CommandNames, (interaction: Interaction<CacheType>, ...args: any[]) => Promise<unknown>>;
  const interactionHandlers: InteractionHandleType = {
    ping: PingInteraction,
    play: handlePlayInteractions,
    skip: skipInteraction,
    stop: stopInteraction,
    help: helpInteraction,
    pause: pauseInteraction,
    resume: resumeInteraction,
  };
  const interactionHandler = interactionHandlers[interaction.commandName];

  if (!interactionHandler) interaction.reply(`No existe el comando: ${interaction.commandName}`);

  await interactionHandler(interaction, properties);
};
