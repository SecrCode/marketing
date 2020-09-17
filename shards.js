const {ShardingManager, Client} = require("discord.js");

//---- JSON ----
const config = require("./config.json")
//---- JSON ----

const shards = new ShardingManager("./index.js", {
    token: config.token,
    totalShards: 2
});

shards.on("shardCreate", shard => {
    console.log(`<-----------------------------[${new Date().toString().split(" ", 5).join(" ")}] Uruchomiono shard: #${shard.id} ------------------------------>`)

});

shards.spawn(shards.totalShards, 1000);