const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
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
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,509xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,509xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50944562059,509xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_11_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0LFxuICAgICAgICA2MSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDM0LFxuICAgICAgICA0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDYyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzksXG4gICAgICAgIDczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDY2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjExLFxuICAgICAgICA0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMixcbiAgICAgICAgMTc5LFxuICAgICAgICA4MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDcwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODksXG4gICAgICAgIDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAyLFxuICAgICAgICA4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0LFxuICAgICAgICA0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK3hrMkwzUGhSbnoxZnFMK3d4Z0xWZlZvZUZKcldBOHJjSGhnUlZtM1hSZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibkdSUHpOS3hSSm00bURMdW5TQVFkQVwiLFxuICBcInBob25lSWRcIjogXCJhZDg2YjM0YS04OTg5LTRhMmUtOTRlMi1mYjYzMTNkOWExYmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgOTYsXG4gICAgICAxMjcsXG4gICAgICAyMDYsXG4gICAgICA2MSxcbiAgICAgIDI0NCxcbiAgICAgIDE4MCxcbiAgICAgIDQ5LFxuICAgICAgMjUsXG4gICAgICAyNDAsXG4gICAgICAxNixcbiAgICAgIDE3MCxcbiAgICAgIDQ5LFxuICAgICAgMTksXG4gICAgICA2MixcbiAgICAgIDIxOCxcbiAgICAgIDI1NSxcbiAgICAgIDcxLFxuICAgICAgMTAwLFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDI0MSxcbiAgICAgIDE0NixcbiAgICAgIDIxMSxcbiAgICAgIDIzNixcbiAgICAgIDM5LFxuICAgICAgMTY1LFxuICAgICAgMTk1LFxuICAgICAgMTcxLFxuICAgICAgMTg5LFxuICAgICAgMjEyLFxuICAgICAgNTUsXG4gICAgICAyMjQsXG4gICAgICAxNDIsXG4gICAgICAyMTIsXG4gICAgICAyNDgsXG4gICAgICAxOTUsXG4gICAgICAxMzksXG4gICAgICAyNixcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wzUHlZZ0dFS3F6K2NFR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicVdscFRycFYwQWdlNkpKT1hHM05uQmswWk9nVHdXdzF1c29GUklJSUUwRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoZGlGVy9oRmM0eHNSNDJoL0dBTGtRYmFlNXpCUHloNjhadi9ZRDViMmJSYUcwZEF3bkUrbEF3dmtPa1VFODUycUJKOVZRSFE0amRIRmY0WmlCRUNBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOL2Qvb1pNT1Nad1IwZy9CNEdPNTZBbk41aEJDai9FWk9obUZLVlE1TENYOFBGdENpQWFubE5lMGllSm1YeHg5U2E0ZEFRNURrRXZHcHVsQW54c1FpUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTQ0NTYyMDU5OjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2VuPCdlobwnZaX8J2Wm/CdlorwnZaT8J2WmCDwnZaR8J2WiiDwnZab8J2WisyB8J2Wl/Cdlo7wnZaZ8J2WhvCdlofwnZaR8J2WiiDwnZaK8J2Wk/CdlojwnZaN8J2WhvCdlpPwnZaZ8J2WivCdlprwnZaXXCIsXG4gICAgXCJsaWRcIjogXCIxODUzNzE0MjYwMjk1ODA6MzdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDk0NDU2MjA1OTozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0ODkxNjY1M1xufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "🥷Mr-Andromede 🥷",
  ownername:process.env.OWNER_NAME|| "🧛‍♂️🥷Mr-Dracula🧛‍♂️",


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
