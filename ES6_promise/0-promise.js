function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulate an async API call, e.g., fetch or setTimeout
      setTimeout(() => {
        const success = true; // or false to simulate an error
  
        if (success) {
          resolve('API response data');
        } else {
          reject(new Error('API request failed'));
        }
      }, 1000); // 1 second delay
    });
  }
