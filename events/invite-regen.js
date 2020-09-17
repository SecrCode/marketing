const {client, Discord} = require("../index.js")

client.on("inviteDelete", (Invite) => {
    let InvGuild = client.guilds.cache.get(Invite.guild.id)
Invite.code;
Invite.guild.id;
}) 