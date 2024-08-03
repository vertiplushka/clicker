const TelegramBot = require('node-telegram-bot-api');
const token = '5961435382:AAH5ieClrWOSVMcluzFRqBN3PVg5fIcdiGw';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message', {
    reply_markup: {
      inline_keyboard: [
        [{text: 'Трахни свою жопу', web_app:{url: 'http://26.81.91.14:3000/new'}}]
      ]
    }
  });
});

console.log('Bot started');




