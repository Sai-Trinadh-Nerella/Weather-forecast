const weatherDataSchema = new mongoose.Schema({
    city: String,
    country: String,
    temperature: Number,
    description: String,
    windSpeed: Number,
    // Add more fields as needed
  });
  
  const WeatherData = mongoose.model('WeatherData', weatherDataSchema);
  
  // Define routes for CRUD operations (e.g., create, read, update, delete)
  // Example: Create weather data
  app.post('/api/weather', async (req, res) => {
    try {
      const newWeatherData = await WeatherData.create(req.body);
      res.json(newWeatherData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Add more routes for reading, updating, and deleting weather data
  