//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "2348108607919";
global.sudo = process.env.SUDO || "2348108607919";
global.owner = process.env.OWNER_NUMBER || "2348108607919";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5VeDV1Q3JEb2R5a2hhbGp4cExPb0h2RjdlamxmMDBOMU80Rll6Sm5VZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmlyQ3pSRUtnMGhnZFA3MjZZNUhROW5qcmxNcTBSYXpCVGpONG9tei96UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtS0ZDTUFvZjZSUVBjdDVSak94WVVtT3g0Ujc5TnJQdWoyOEN2dURDeTBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwV2RlbFA1NUxRMTVkeUVwTUc4Mk00ZHNGRk00Q0VKVUVneFpSK2U1M3hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVPcTl5T2hnZmN1Z1RqR1BYUW9aVUhycHBiNHFKSkZidWczZzcvOWptMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRMQnhzUDIrN0NmcUY5UHQwNGlienRuQTIyNjkyeDlESDkyT0x1ZWtibjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtZQTF0K21WY0hvMTl6dkxNZjZyR29YNU9ocERTcUx1SnRpUGJMVlcwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjVaY1dnMnRXeFl0Y2dOcm11ZXJzMW5kR285MUxvLy9obTJYM3FTazZXST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlB3KzZCUlJHTDF5amliY2k5cjlpM29QbnNLcXllVTh4a05BVk9hSU1vUmR5YXNhTEl6WmhiZmtPVlJtSnQzWk54WTlFeUJsZGgxZGYyOC9OTXVOQ2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiI2aVZ4OFNEVE54bGk3NjUzcElxSnFRNDBaeDlhbXlnYkJBRjF4aS9uZmVVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMDg2MDc5MTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEY5QUQ3Mjg0MEY2RDJEREE3QUY5Mzc2Qzk0RDJCNjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTgxODM4MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUkYwNnQ2dUhTQ2FUdUJOZjRWZy1tZyIsInBob25lSWQiOiJlOWFmMTkyMS03MDcwLTQzZjQtYjBjOS1hOTYwZTVmY2MwNjYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQzQwd2dyck10QkFlQlptWUo2WStYdDkvK3NVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllCWERlQ2xqcDRDRlptNm5wZHVCSWtRUnN2MD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCWEg1WjdGWSIsIm1lIjp7ImlkIjoiMjM0ODEwODYwNzkxOToyMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFBHcmUwRkVQdTVnN1VHR0EwZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWlM4S3FPWVpxU29QYTRnYU9vbGd6bWY0ZmtxeXlXUC9RS0s2NUFUZDB6dz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTER6L0xFMTRhKzVFZHlqSEg0MjJCMWNEMmNvVkhIRWtJZmg0SGhDNjVkZXpnT0hGZHhCYWZ5TTJ0ZTZnQ3NqVFRwNEt2T3ZrUU9ycGVJdHRpM3U3RGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlB3N0JnNzQrVWsxUHJGajhodXJROU9BSUhVZmtYTmtPU1c3NklLQXBMR2xvL0h0RDN5bU42Q2hLTmk1MjNOZSt3MUtadWV6SUhsUmlVUW1hMlRiM2dRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEwODYwNzkxOToyMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXVXZDcWptR2FrcUQydUlHanFKWU01bitINUtzc2xqLzBDaXV1UUUzZE04In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxODE4Mzc2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhMYSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "trusty",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "trusty Md",
  ownername: process.env.OWNER_NAME || "trusty san",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
