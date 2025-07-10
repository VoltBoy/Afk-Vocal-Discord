const fs = require('fs');
const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice');
const consolecolor = require('gradient-string');
const { status, state, emojistatus, vocal, guild, casque, stream_url } = require('./config.json');

// Lire les tokens ligne par ligne
const tokens = fs.readFileSync('./tokens.txt', 'utf-8').split('\n').map(t => t.trim()).filter(Boolean);

// Lancer un client par token
tokens.forEach((token, index) => {
    const client = new Client({ readyStatus: false });

    client.on('ready', async () => {
        // Affichage stylisé
        console.log(consolecolor("#0330fc", "#0398fc")(`
  AFK Vocal By j8vc  
        `));
        console.log(consolecolor("#0330fc", "#0398fc", "#0330fc", "#0398fc", "#0330fc")(
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        ));
        console.log(consolecolor("#0330fc", "#0398fc")(
            `                                  [+] Nom du compte: ${client.user.username}`
        ));
        console.log(consolecolor("#0330fc", "#0398fc", "#0330fc", "#0398fc", "#0330fc")(
            "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        ));

        // Définir le statut Streaming
        client.user.setPresence({
            activities: [{
                name: state,
                type: 1, // 1 = STREAMING
                url: stream_url
            }],
            status: status // 'online', 'idle', 'dnd'
        });

        // Rejoindre le vocal
        try {
            const channel = await client.channels.fetch(vocal);
            joinVoiceChannel({
                channelId: vocal,
                guildId: guild,
                adapterCreator: channel.guild.voiceAdapterCreator,
                selfDeaf: casque
            });
            console.log(`${client.user.username} est connecté dans le vocal !`);
        } catch (err) {
            console.error(`Erreur lors de la connexion au vocal pour ${client.user.username} : ${err.message}`);
        }
    });

    // Connexion du client
    client.login(token).catch(err => {
        console.error(`Erreur de connexion pour un token : ${err.message}`);
    });
});
