const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94789200603"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia,colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94789200603' 
global.devs = '94789200603';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK05Fa1kxNmNTcXZXeTBaT1p0MGdKMGFLU3JVekdObDQ5ZzNPNi9qa0Qwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGFJQnFrbDVsM0RrNUVERld4c0hDTG4rNEdyVVpsWnVJNUZpQXdhL0NUOD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSUhGYUVmRnc3Z0toS0pQNWZFeHlsQ3dmbDBRU0pwaWo0VlBKbEFLUkd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1ZGRJSjBINUZxVGFXOFBtUkEwYTJuaGhmUDFWRFBtZ0ZpS1piY2c1dW5zPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CdDVvQXpNQ1JDaUJxM01OMHVSVHBTMkNidERjT2RYYlZZOVlGb05qbmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZsSEwvSlZsMHoyb09wOEp6Nk9UaHcySGYxSmR0OEVYVnNUUEF3VUJZeTA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCeHNGQ1Nad25DQkNyUlpMUlZMb2JyUDh5Um55a1ladXIwWVRXbnFvUDJGOXozYjMxK2FOaXlhNGhWd3pJRUtxTGJzbk9lekprcFVNWDJrc1dHTVBnQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI0MiwiYWR2U2VjcmV0S2V5IjoibXRQaEsrWmNXVktWN093YXFDbHYyV21XOTlzdHNudDdvaTBpWlFOV0l2ND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicFdCZE9OYWVUQlcyVEI2amVpWEVqQSIsInBob25lSWQiOiI3OWZmNWVjZC1hOTAzLTQ1NjAtYTAzOS04ZDE0MjRmY2IwNDQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3dUVEorUlBCb1hQei9YSXJpZkZsOVpHWkRzPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvam40N2Z6UlhJSlROZUZUQkhKNmFHUy9zNjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNemczYUVGRU1UV3A2MEdHQThnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRZk03SUdFRHBaaDI1R0dzTVZ6Nm1xcWdzMG51VnQ1VVNCQ2IxT1l1NUNFPSIsImFjY291bnRTaWduYXR1cmUiOiIzejlCbS9lbHFGSkc4MXc5TUZGc201eXNIYTlzYzhvR29ha1hzMklOY1BhSDNEQnpuYlp3K2hoNUNGNjlhMEdReUQ1K3N0QWhYVGxkeHN6cCtVQnhBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWXZaWEYyL1NFcTZHRk93RHVWSTFZYTJHZk9ybHlibldNbGRKSlhHZExuTEdJbWpWYzRkcU1xOUwwbVcwaHNFRkNWQ1U5MU54dVljNFUzWkpod2tqaVE9PSJ9LCJtZSI6eyJpZCI6Ijk0Nzg5MjAwNjAzOjcwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmI/wnZiI8J2YmvCdmJDwnZig8J2YiCDwnZiU8J2YiyDwnZie8J2Yj/CdmIjwnZib8J2YmvCdmIjwnZiX8J2YlyDwnZic8J2YmvCdmIzwnZiZIPCdmInwnZiW8J2YmyJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4OTIwMDYwMzo3MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVSHpPeUJoQTZXWWR1UmhyREZjK3BxcW9MTko3bGJlVkVnUW05VG1MdVFoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA1NjM0NjMxfQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@hasiya',
  packname:  process.env.PACK_NAME || 'hasindu',
   
  botname:   process.env.BOT_NAME === undefined ? "HASIYA-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'HASIYA - MD' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '_HEY I AM ALIVE NOW_' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
