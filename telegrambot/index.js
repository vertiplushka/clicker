const TelegramBot = require('node-telegram-bot-api');
const token = '5961435382:AAH5ieClrWOSVMcluzFRqBN3PVg5fIcdiGw';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'ээээ ну каароч', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'тапать хомячка тут', web_app:{url: 'https://seequeuesi.ru/clicker'}}]
      ]
    }
  });
});

console.log('Bot started');




