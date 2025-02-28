async function readData() {
    try {
      const response = await axios.get('http://localhost:27017/Weather_Forecast_Application/Weather_App');
      const data = response.data;
      // Use 'data' in your React component
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  