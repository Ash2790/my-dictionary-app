import React, { useState } from 'react'; // Import React and the useState hook

// DictionarySearch component that takes in a prop 'onSearch'
function DictionarySearch({ onSearch }) {
  // State to hold the input word
  const [word, setWord] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (word) { // Check if the input field is not empty
      onSearch(word); // Call the onSearch function with the word as argument
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Form to submit the word */}
      <input
        type="text" // Input field for the user to enter a word
        value={word} // Set the value of the input to the word state
        onChange={(e) => setWord(e.target.value)} // Update the word state on input change
        placeholder="Enter a word" // Placeholder text in the input field
      />
      <button type="submit">Search</button> {/* Button to submit the form */}
    </form>
  );
}

export default DictionarySearch; // Export the DictionarySearch component for use in other parts of the application
