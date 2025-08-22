const { CronJob } = require("cron");
const description = "Send a message every X minutes in a channel.";

const job = (interaction, client) =>
  new CronJob(
    "0 0 8 * * 0", // Runs at 08:00 (8am) every Sunday
    async function () {
      const response = await interaction.channel.send({
        content:
          "Quel soir est-ce qu'on joue à LoL ? \n- :one: : Lundi \n- :two: : Mardi \n- :three: : Mercredi \n- :four: : Jeudi \n- :five: : Vendredi \n- :six: : Samedi \n- :seven: : Dimanche ",
        withResponse: true,
      });
      response.react("1️⃣");
      response.react("2️⃣");
      response.react("3️⃣");
      response.react("4️⃣");
      response.react("5️⃣");
      response.react("6️⃣");
      response.react("7️⃣");
    },
    null,
    true,
    "America/Los_Angeles"
  );

const init = async (interaction, client) => {
  const response = await interaction.reply({
    content: "Scheduled message started!",
    withResponse: true,
  });
  job(interaction, client).start();
};

module.exports = { init, description };
