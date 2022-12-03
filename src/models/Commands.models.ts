import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";

export type CommandNames = "ping" | "play" | "skip" | "stop" | "pause" | "resume" | "help";

interface Option {
  name: string;
  type: ApplicationCommandOptionType;
  description: string;
  required: boolean;
}

interface CommandInfo {
  name: CommandNames;
  description: string;
  options?: Option[];
}

export const commands: CommandInfo[] = [
  {
    name: "ping",
    description: "Replies with Pong!.",
  },
  {
    name: "play",
    description: "Play song",
    options: [
      {
        name: "query",
        type: ApplicationCommandOptionType.String,
        description: "The song you want to play",
        required: false,
      },
      {
        name: "url",
        type: ApplicationCommandOptionType.String,
        description: "The link of the song you want to play",
        required: false,
      },
      {
        name: "playlist",
        type: ApplicationCommandOptionType.String,
        description: "The link of the playlist you want to play",
        required: false,
      },
    ],
  },
  {
    name: "skip",
    description: "Skip current song.",
  },
  {
    name: "stop",
    description: "Stop music",
  },
  {
    name: "pause",
    description: "Pause playing song",
  },
  {
    name: "resume",
    description: "Resume song",
  },
];
