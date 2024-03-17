const {
  REST,
  Collection,
  ApplicationCommandType,
  Events,
  Routes,
} = require("discord.js");
const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
const { readdirSync } = require("node:fs");
const ascii = require("ascii-table");
const SlashTable = new ascii("SlashCommands").setJustify();
const EventsTable = new ascii("Events").setJustify();
const path = require("path");


// =======-> Slash Commands
async function SlashCommandEvent(client) {
  const commands = [];
  client.commands = new Collection();
  const commandsDir = path.join(__dirname, "../SlashCommands");

  readdirSync(commandsDir).forEach((folder) => {
    const commandFile = readdirSync(path.join(commandsDir, folder)).filter(
      (file) => file.endsWith(".js")
    );
    for (const file of commandFile) {
      const command = require(path.join(commandsDir, folder, file));
      if (command.name && command.description) {
        commands.push({
          type: ApplicationCommandType.ChatInput,
          name: command.name,
          description: command.description,
          options: command.options || [],
        });
        client.commands.set(command.name, command);
        SlashTable.addRow(`/${command.name}`, "🟢 Working");
      } else if (command.data?.name && command.data?.description) {
        commands.push(command.data.toJSON());
        client.commands.set(command.data.name, command);
        SlashTable.addRow(`/${command.data.name}`, "🟢 Working");
      } else {
        SlashTable.addRow(file, "🔴 Not Working");
      }
    }
  });
  console.log(SlashTable.toString());

  client.once(Events.ClientReady, async (c) => {
    try {
      const data = await rest.put(Routes.applicationCommands(c.user.id), {
        body: commands,
      });
      await console.log(
        `🟢 | Started refreshing ${commands.length} application (/) commands.`
      );
      await console.log(
        `🟢 | Successfully reloaded ${data.length} application (/) commands.`
      );
    } catch (error) {
      console.error(error);
    }
  });
}

// =======-> Events
async function EventsHandler(client) {
  const eventDir = path.join(__dirname, "../events");
  readdirSync(eventDir).forEach((folder) => {
    const eventFiles = readdirSync(path.join(eventDir, folder)).filter((file) =>
      file.endsWith(".js")
    );
    for (const file of eventFiles) {
      const event = require(path.join(eventDir, folder, file));
      if (event.name) {
        if (event.once) {
          client.once(event.name, (...args) => event.execute(...args, client));
        } else {
          client.on(event.name, (...args) => event.execute(...args, client));
        }
        EventsTable.addRow(event.name, "🟢 Working");
      } else {
        EventsTable.addRow(file, "🔴 Not working");
      }
    }
  });
  console.log(EventsTable.toString());
}



// =======-> Run to Build the environment
async function Run(client) {
  SlashCommandEvent(client);
  EventsHandler(client);
}

module.exports = { EventsHandler, SlashCommandEvent, Run };
