const TelegramBot = require('node-telegram-bot-api');
const token = '';
const bot = new TelegramBot(token, {polling:true});

bot.on('polling_error', function(error){
    console.log(error);
});

bot.onText(/^\/start/, function(msg){
    var chatId = msg.chat.id;
    var nameUser = msg.from.first_name;
    
    bot.sendMessage(chatId, " Hey " + nameUser "Soy {} Que Tal! Soy Un Checker Creado por {ownername}"
    	"Para Hacer Mas Facil la Utilizacion de Bins"
    	"Para Saber Mis Comandos Usa /cmds" ); 
});
