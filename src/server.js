const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

const PORT = 3000;

// Главная страница
app.get("/", (req, res) => {
    res.render("index", { message: "Сервер работает!" });
});

// Маршрут для получения погоды
app.get("/api/weather", async (req, res) => {
    const { city } = req.query;
    if (!city) {
        return res.status(400).send("Пожалуйста, укажите город.");
    }

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather`,
            {
                params: {
                    q: city,
                    appid: process.env.WEATHER_API_KEY,
                    units: "metric",
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        console.error("Ошибка при запросе к OpenWeatherAPI:", error.response?.data || error.message);
        res.status(500).send("Ошибка при получении данных о погоде.");
    }
});

// Маршрут для получения новостей
app.get("/api/news", async (req, res) => {
    const { city } = req.query;
    if (!city) {
        return res.status(400).send("Пожалуйста, укажите город.");
    }

    try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
            params: {
                q: city,
                apiKey: process.env.NEWS_API_KEY,
                language: "ru",
                pageSize: 5, // Ограничиваем количество новостей
            },
        });
        res.json(response.data.articles);
    } catch (error) {
        console.error("Ошибка при запросе к NewsAPI:", error.response?.data || error.message);
        res.status(500).send("Ошибка при получении новостей.");
    }
});

// Маршрут для получения курса валют
app.get("/api/currency", async (req, res) => {
    try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`);
        res.json(response.data.rates);
    } catch (error) {
        console.error("Ошибка при запросе к Currency API:", error.response?.data || error.message);
        res.status(500).send("Ошибка при получении курса валют.");
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
});
