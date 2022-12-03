import { Player } from "discord-player";
import { Client, GatewayIntentBits } from "discord.js";

import { handleInteractions } from "../interactions";

export const startBot = async () => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates] });

  const player = new Player(client, {
    ytdlOptions: {
      quality: "highestaudio",
      highWaterMark: 1 << 25,
    },
  });

  client.on("ready", () => console.log(`Logged in as ${client.user.tag}!`));

  client.on("interactionCreate", handleInteractions({ player, client }));

  client.login(process.env.DISCORD_BOT_ACCESS_TOKEN);
};
