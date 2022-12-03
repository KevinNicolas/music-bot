import { Player } from "discord-player";
import { Client } from "discord.js";

export interface ExtraProperties {
  player: Player;
  client: Client;
}
