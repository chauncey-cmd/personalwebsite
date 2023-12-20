import React, { useState, useEffect } from 'react';

function Main() {
  // State to store data from the Dog API
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    // Fetch data from the Dog API when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setDogImage(data.message); // Update state with the fetched dog image URL
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Re-run the effect only once when the component mounts

  return (
    <section id="main">
      <h2>Main Me</h2>
      {/* Display a random dog image from the Dog API */}
      <img src={dogImage} alt="Random Dog" />
    </section>
  );
}

export default Main;
