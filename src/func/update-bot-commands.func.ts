import { REST, Routes } from "discord.js";
import { commands } from "../models";

export const updateBotCommands = async () => {
  const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_BOT_ACCESS_TOKEN);
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.DISCORD_BOT_CLIENT_ID), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};
