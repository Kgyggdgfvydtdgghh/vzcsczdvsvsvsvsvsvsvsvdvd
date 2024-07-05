

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "919369987035"
global.ownername = "🤖"
global.ytname = "Ai 🤖"
global.socialm = "Ai 🤖"
global.location = "🤖"

global.ownernumber = '919369987035'  //creator number
global.ownername = 'Ai 🤖' //owner name
global.botname = 'Google Ai 🤖' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'https://google-ai-x.blogspot.com/'

//console view/theme
global.themeemoji = '🤖'
global.wm = "Google Ai 🤖"

//theme link
global.link = 'https://google-ai-x.blogspot.com/'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//text bug
global.xbugtex = {
xtxt: '',
}
global.bimg = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitmfRO1947wm1d7JWMhqjY85cVpDsajK5v_Na7Gvh16yZVaSfPEAVfaBthcw57oblAFwhLb0mA03G-DKqWNVxv76gd_eyJOxx9vQhfTBBFK1pY84TSkamWFpH7hneXX6dItyeR-VWy8WwEUbHjfZz6G8a4IMxLwNIXyhhCKa7rKEUdR07VrEhHFTU7KKpu/s1280/IMG-20240701-WA0023.jpg'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})