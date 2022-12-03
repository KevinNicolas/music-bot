import { startBot, updateBotCommands } from "./func";

export const app = async () => {
  console.log("Update commands...");
  await updateBotCommands();

  console.log("Start bot...");
  await startBot();
};

export default app;
