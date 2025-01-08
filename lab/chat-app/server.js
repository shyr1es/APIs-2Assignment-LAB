const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

// Счётчик пользователей
let userCount = 0;

server.on('connection', (ws) => {
    // Уникальное имя пользователя
    userCount++;
    const userName = `User ${userCount}`;

    // Приветственное сообщение новому клиенту
    ws.send(`Welcome to the chat, ${userName}!`);

    // Обработка входящих сообщений
    ws.on('message', (message) => {
        console.log(`${userName}: ${message}`); // Лог входящих сообщений

        // Формируем сообщение, которое увидят другие пользователи
        const formattedMessage = `${userName}: ${message.toString()}`;

        // Рассылка сообщения всем подключенным клиентам (включая отправителя)
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(formattedMessage); // Отправляем сообщение
            }
        });
    });

    // Обработка отключения клиента
    ws.on('close', () => {
        console.log(`${userName} disconnected`);
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
