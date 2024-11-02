# Ashford's Dictionary App

## Overview
Ashford's Dictionary App is a simple React application that allows users to search for the definitions of words using the Merriam-Webster Dictionary API. The application provides a user-friendly interface for entering a word and retrieving its definition.

## Features
- User-friendly search interface.
- Displays the definition of the entered word.
- Handles errors gracefully, providing feedback if the definition is not found or if there is an issue with fetching data.

## Technologies Used
- React.js
- Merriam-Webster Dictionary API
- CSS for styling

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**

   git clone <repository-url>
   cd my-dictionary-app

2. Install dependencies:

npm install

3. Set up environment variables:

Create a file named .env in the root directory of the project.
Add your API key as follows:

REACT_APP_DICTIONARY_API_KEY_1=your_first_api_key

4. Start the application:

npm start
This will run the app in development mode. Open http://localhost:3000 in your browser to view it.

Usage
Open the app in your browser.
Enter a word in the search field and click the "Search" button.
The app will display the definition of the entered word.
If the word is not found or there is an error in fetching the definition, an appropriate message will be shown.
Contribution
Contributions are welcome! If you have suggestions or improvements, please feel free to open an issue or submit a pull request.

License
This project is an academic free learning via HyperionDev.

Acknowledgments
Thanks to the Merriam-Webster Dictionary API for providing access to word definitions.