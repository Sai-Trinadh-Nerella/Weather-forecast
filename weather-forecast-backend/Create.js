async function createData(data) {
    try {
      const response = await axios.post('http://localhost:27017/Weather_Forecast_Application/Weather_App', data);
      // Handle the response as needed
    } catch (error) {
      console.error('Error creating data:', error);
    }
  }
  