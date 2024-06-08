const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23409071778678";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_43_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNixcbiAgICAgICAgMjQyLFxuICAgICAgICA4OSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDk1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDQzLFxuICAgICAgICA2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDYyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDkzLFxuICAgICAgICA3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3LFxuICAgICAgICAzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk5LFxuICAgICAgICA0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA3LFxuICAgICAgICAyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDgyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDMzLFxuICAgICAgICA3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAzLFxuICAgICAgICAyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDY5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY2LFxuICAgICAgICA2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA0LFxuICAgICAgICA2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0LFxuICAgICAgICA0MixcbiAgICAgICAgMTU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdPL0Qwd3lGb1g0NHQraGVrRzdxVDJpY3pXc0ZuMEJ2OHlJYVYwMGVEOW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBZZ2FhVTJJUnRpUFVsMHloSGM4VlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTNjYWU2YWItZjI3MC00ZmM2LWE1OTEtN2JjMWYzNDM2ZDhmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDIsXG4gICAgICAxNzAsXG4gICAgICAyMyxcbiAgICAgIDIwNixcbiAgICAgIDk5LFxuICAgICAgMTczLFxuICAgICAgMTYsXG4gICAgICAxMixcbiAgICAgIDE2NSxcbiAgICAgIDE5MixcbiAgICAgIDM4LFxuICAgICAgMTk4LFxuICAgICAgMTg5LFxuICAgICAgNjAsXG4gICAgICAxNjgsXG4gICAgICAzMSxcbiAgICAgIDIwNCxcbiAgICAgIDEyNCxcbiAgICAgIDk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDY3LFxuICAgICAgMTMsXG4gICAgICAzNCxcbiAgICAgIDEwNSxcbiAgICAgIDQwLFxuICAgICAgMjA2LFxuICAgICAgNTcsXG4gICAgICAxODUsXG4gICAgICAyLFxuICAgICAgMjM5LFxuICAgICAgMTUsXG4gICAgICAyMjIsXG4gICAgICAxMjcsXG4gICAgICAyMTksXG4gICAgICAxODUsXG4gICAgICAxMTEsXG4gICAgICAxNTIsXG4gICAgICAxNTcsXG4gICAgICA1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0SEtFTjU5RlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3MTc3ODY3ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDQxNjU5OTI4ODY0MDM6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOVGMrS0lERUltVWtyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkc4ZXFKbXg0d2NDOTg1RGQ5Z1JIUHpXNkdkazZ4TFMyK2tuUEJNVlNEM1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTGdxWU1BMzhQaGx1SGtidW82MnZkNG1qbHBRQVEwa2JzWkRTcGVMWkJEUmwvc1VJY2piY1hBWWYrSGIrY2hHSjhBWGtmQ0VDU2dQbXRsUHR6ZzE3RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ2FXUzZiazdsU2ltWUJ3bVdYeVdXS3lpLytHd2Yzam9TR3ByWEZqRCtmN3k4NnZ6aE9tVzIxMnRraXdSb01JTThVME9DR3lzOGdZYUFaRVBvbWtqZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3MTc3ODY3ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzg2NDk3M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0= "  // PUT your SESSION_ID


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
