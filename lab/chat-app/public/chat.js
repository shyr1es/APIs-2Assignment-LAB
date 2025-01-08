const ws = new WebSocket('ws://localhost:8080');

// Элементы DOM
const messagesDiv = document.getElementById('messages');
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');

// Получение сообщений с сервера
ws.onmessage = (event) => {
    const message = document.createElement('div');
    message.textContent = event.data; // Отображаем сообщение
    messagesDiv.appendChild(message);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Прокрутка вниз
};

// Отправка сообщения
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();

    if (message) {
        ws.send(message); // Отправляем сообщение на сервер
        messageInput.value = ''; // Очищаем поле ввода
    }
});
