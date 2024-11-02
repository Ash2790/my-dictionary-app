import React, { useState } from 'react'; // Import React and the useState hook
import DictionarySearch from './components/DictionarySearch'; // Import the DictionarySearch component
import './App.css'; // Import the CSS file for styling

function App() {
  // State to store the fetched definition and any error messages
  const [definition, setDefinition] = useState(null);
  const [error, setError] = useState(null);

  // Function to fetch the definition of a word from the dictionary API
  const fetchDefinition = async (word) => {
    try {
      // Send a request to the dictionary API with the specified word and API key
      const response = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_DICTIONARY_API_KEY_1}`
      );

      // Check if the response is ok (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`); // Throw an error if the response is not ok
      }

      // Parse the JSON data from the response
      const data = await response.json();
      
      // Check if the data contains a valid definition
      if (data[0] && data[0].shortdef) {
        // If a definition exists, update the definition state
        setDefinition({
          word,
          meaning: data[0].shortdef[0], // Get the first short definition
        });
        setError(null); // Clear any previous error
      } else {
        setError('Definition not found'); // Set error message if no definition is found
        setDefinition(null); // Clear any existing definition
      }
    } catch (error) {
      // Handle any errors that occur during the fetch
      setError('Error fetching the definition'); // Set a general error message
      setDefinition(null); // Clear any existing definition
    }
  };

  return (
    <div>
      <h1>Ashford's Dictionary App</h1> {/* Title of the application */}
      <DictionarySearch onSearch={fetchDefinition} /> {/* Render the search component and pass the fetch function */}
      
      {/* Display the definition if it exists */}
      {definition && (
        <div className="definition">
          <h2>Definition of {definition.word}:</h2> {/* Display the word being defined */}
          <p>{definition.meaning}</p> {/* Display the meaning of the word */}
        </div>
      )}
      
      {/* Display error message if there is an error */}
      {error && <p className="error">{error}</p>} {/* Show the error if it exists */}
    </div>
  );
}

export default App; // Export the App component for use in other parts of the application
