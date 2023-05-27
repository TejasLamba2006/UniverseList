const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: 55558,
  staff: ["998763334264442912", "536538183555481601", "642085851429339157", "271285474516140033"],
  owners: ["998763334264442912"],
  developers: ["998763334264442912", "1076942240791928875"],
  betatesters: ["998763334264442912"],
  designers: ["642085851429339157"],
  mongo: process.env.mongo,
  bot: { id: "1015807573733154818", prefix: "!", secret: process.env.secret, redirect: "https://universe-list.xyz/auth/callback", token: process.env.token },
  servers: { id: "1018001748020961311", prefix: "-", apikey: process.env.apikey, token: process.env.stoken },
  guilds: { main: "941896554736934933", testing: "1043571235898019890" },
  roles: { mod: "1001901317024907276", webmod: "941896555164749933", admin: "941896555164749934", developer: "941896554736934941", partner: "942605922981806090", bots: "941896555164749932", bottester: "941896554736934934", members: "941896554736934938", botsintesting: "1044458503093375090" },
  levels: { five: "1007058570879180851" },
  channels: { generalChat: "941896555718410285", weblogs: "941896555567398982", levelup: "1099445585016274954", modlogs: "941896555567398981", leaderboardC: "1044425171047546980", leaderboardM: "1044434735331553370", testingcategory: "1043571236757831680" },
  tags: { servers: ["Community", "Development", "Technology", "Social", "Roleplay", "Gaming", "Fun", "Emoji", "Streaming", "Anime", "E-Sport", "Meme", "Music"], bots: ["Moderation", "Fun", "Economy", "Leveling", "Verification", "Web-Dashboard", "Utilities", "Logging", "Music", "Anime", "Memes", "Gaming", "RPG", "Crypto", "Welcomer", "Reaction-Roles", "24-7", "Social", "Ticket", "Youtube", "Twitch", "Emoji"] },
  webhooks: { error_logs: { enabled: true, webhook: process.env.errorLogs } },
};
