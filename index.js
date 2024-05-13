import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  console.log(message.content);
  if (message.author.bot) return;
  message.reply({
    content: "Hi from bot",
  });
});

client.on("interactionCreate", (interaction) => {
  interaction.reply("Pong!!");
});

client.login(process.env.TOKEN);
