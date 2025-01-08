# Weather and News Application

## 🌟 Project Goals
This application allows you to:
- 🌦️ **Get the current weather**: Displays real-time temperature, humidity, wind speed, and more using OpenWeatherAPI.
- 📰 **Read news**: Fetches the latest news related to the selected city using NewsAPI.
- 💱 **Check exchange rates**: Shows currency exchange rates (USD → KZT, RUB, EUR) using Exchangerate API.

---

## 🚀 Installation and Launch

### **2. Ensure Node.js is Installed**
Make sure you have Node.js installed. You can download it from [https://nodejs.org](https://nodejs.org).

### **3. Initialize the Project**
Run the following command to initialize the project:
```bash
npm init -y
```
### **4. Install Dependencies**
Install the necessary dependencies:
```bash
npm install express ejs dotenv axios
```
### **5. Configure the Git Repository
If Git is not initialized, do so with:
```bash
git init
```
### **6. Create the .env File
Create a file named .env in the root directory and add your API keys:
```bash
WEATHER_API_KEY=your_openweather_api_key
NEWS_API_KEY=your_newsapi_api_key
```
### **7. Run the Server
Start the server with:
```bash
node src/server.js
```
### **88. Open in Browser
Open the application in your browser at:
```bash
http://localhost:3000
```
### 📂 Project Structure:
```bash
project-folder/
├── public/                # Static assets (CSS, images)
├── src/
│   └── server.js          # Backend logic
├── views/
│   └── index.ejs          # Frontend template
├── .env                   # API keys
├── package.json           # Project metadata and dependencies
├── README.md              # Documentation
```
---

## 🌐 API Endpoints

### **1. Weather**
- **Endpoint**: `/api/weather`
- **Parameters**: 
  - `city` (name of the city, required).
- **Example**:
  **RESPONSE**
 ```bash
- **Response**:
```json
{
  "name": "Moscow",
  "main": {
      "temp": 5.0,
      "feels_like": 2.0,
      "humidity": 80
  },
  "wind": {
      "speed": 3.5
  },
  "coord": {
      "lat": 55.75,
      "lon": 37.62
  }
}
```

### **2. News
**Endpoint**: /api/news
**Parameters**: city (name of the city).
**Example**: /api/news?city=Moscow
**RESPONSE**
```bash
[
  {
    "title": "News headline",
    "description": "Short description of the news",
    "url": "https://example.com/news"
  }
]
```
### **3. Currency
**Endpoint**: /api/currency
**Parameters**: None.
**Example**: /api/currency

**RESPONSE**
```bash
{
  "KZT": 470.25,
  "RUB": 75.34,
  "EUR": 0.92
}
```

### 🛠️ Technologies Used
**Frontend**:
HTML + EJS: For dynamic page rendering and templating.
Bootstrap: For a responsive and clean design.
**Backend**:
Node.js: Server-side platform.
Express.js: Framework for creating API routes and middleware.
Axios: To make HTTP requests to external APIs.
dotenv: To manage environment variables.
**APIs**:
OpenWeatherAPI: Provides real-time weather data.
NewsAPI: Fetches the latest city-related news.
Exchangerate API: Returns current exchange rates.

### 🧪 Testing
### Test API Routes
**Weather API**:
Endpoint: /api/weather
Test with a valid city name (e.g., /api/weather?city=Moscow) to ensure data is retrieved.
**News API**:
Endpoint: /api/news
Test with a valid city name (e.g., /api/news?city=Moscow) to verify correct news articles are returned.
**Currency API**:
Endpoint: /api/currency
Test to ensure the exchange rates are returned properly.
### Test the Frontend
**Enter city names**:
Verify that data for weather, news, and currency updates displays correctly on the page.
**Responsive Design**:
Test the user interface on both desktop and mobile devices to ensure proper layout and usability.

### 📧 Author
**DIMASH**: Developer and creator of this project.
**NURDA**: Pomogator(helper) this project
**ERNUR**: Also pomogator this project

