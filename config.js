const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/COLOMBO";
global.github=process.env.GITHUB|| "https://github.com/megaking789/GOLDEN-MEGA-MD-V1";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vb1oyIFKwqSWn4uoN43D";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vb1oyIFKwqSWn4uoN43D" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/G5sVyCW/GOLDEN-MEGA-MD.png" || "https://i.ibb.co/G5sVyCW/GOLDEN-MEGA-MD.png" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/G5sVyCW/GOLDEN-MEGA-MD.png" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,94768859286";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94768859286";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94774609569";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://GOLDEN-MEGA-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_32_01_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMixcbiAgICAgICAgMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM2LFxuICAgICAgICA2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAzNSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODksXG4gICAgICAgIDU2LFxuICAgICAgICA1MixcbiAgICAgICAgNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNCxcbiAgICAgICAgODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI3LFxuICAgICAgICAzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkck1XZjM0MmduMENLaEdnQTM1d1hJTXBpV3lQYkVaR1Rxam1nRTl5emtvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzg1ODcxMzAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MDc2Q0JDRTZFQ0NERDQ2QjA4REJEMzQ5MkIxMUUxRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzYzMjUxNTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSDVIRUJmNExTcHl4RGJTdE52ZExXUVwiLFxuICBcInBob25lSWRcIjogXCJlYmJjZDQ5OC0wOTUwLTRjMGQtYjkwZS1hNzQ4ZWE2MzAxZDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgNDQsXG4gICAgICAxNjMsXG4gICAgICAyNDYsXG4gICAgICAxNTcsXG4gICAgICA2MixcbiAgICAgIDE2OCxcbiAgICAgIDE4MyxcbiAgICAgIDkxLFxuICAgICAgMTI0LFxuICAgICAgNzYsXG4gICAgICA1OCxcbiAgICAgIDIzMixcbiAgICAgIDEyNixcbiAgICAgIDE0NSxcbiAgICAgIDE2NixcbiAgICAgIDQ1LFxuICAgICAgMTk4LFxuICAgICAgMTk1LFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDI1MyxcbiAgICAgIDI0NSxcbiAgICAgIDE1OSxcbiAgICAgIDE2LFxuICAgICAgMTI2LFxuICAgICAgMjIsXG4gICAgICA5MSxcbiAgICAgIDQwLFxuICAgICAgMjI4LFxuICAgICAgMTYyLFxuICAgICAgMTI5LFxuICAgICAgMTc3LFxuICAgICAgMjU0LFxuICAgICAgOTQsXG4gICAgICA0NixcbiAgICAgIDAsXG4gICAgICAzOCxcbiAgICAgIDEwMSxcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhKQUFQUEFTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NTg3MTMwMzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY4MDkyNjg4NzUyODMyOjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pxNXQvd0dFSm53K0xzR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibE9aVWJydzVkZDkzSEU4Yjk3VHpScUYyam92MXRURDc1cDFFa09XN2VWMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJteHNDWFhmeWNMcGhnMHRqSWhNZ1UxTnFzdEtiNG9UdUsrekUvYjQ0MEZFV20vYzlpWnFZaXdac0FUbE5jSnUreDNpeXY0Sm5WMHFkWUZyNVJ2M0FDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoTjBYQ1pTVmdQR1p0eTdiMmQ0bkpWdEJ4N29vVzlUVnBIU3JKcVZkRkxyTGtodTVOVUtFbGdsZGhlUE9rWlBXMDlaTTc1S2haL29wNnc2WDVCNlpBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NTg3MTMwMzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNjMyNTE0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUg2SVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSDZJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMGhUZlNudXFBV2NRSDJJbEEzRjBGN3o2N1RSUy92b053OGRIVUZXOUxqYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODcxNTY4MDI2LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Golden-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • mega ᴛᴇᴄʜ』*\n youtube.com/@darknamemusic"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Golden-XMD",
  ownername:process.env.OWNER_NAME|| "Golden-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
