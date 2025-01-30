# Just Another Text Editor (J.A.T.E)

## Description

Just Another Text Editor (J.A.T.E) is a Progressive Web Application (PWA) designed for offline and online use. This single-page application utilizes advanced caching and data storage techniques to ensure a seamless user experience. J.A.T.E allows developers to edit and save code snippets or notes efficiently, even without an active internet connection.

## Features

- Fully functional text editor that works offline.
- IndexedDB integration for storing and retrieving data.
- Service worker implementation for caching static assets.
- Installable as a standalone application on desktops and mobile devices.
- Webpack integration for bundling assets and optimizing the application.
- Modern user interface leveraging CodeMirror for syntax highlighting and a smooth text-editing experience.

## Technologies Used

- **JavaScript (ES6)**: Core functionality of the application.
- **CodeMirror**: A browser-based text editor.
- **IndexedDB**: Database for storing data offline.
- **Webpack**: Module bundler for the client-side assets.
- **Workbox**: A library for managing service workers and caching.
- **Express.js**: Backend server for serving the application.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install all dependencies using the package manager of your choice.
4. Build the client-side application.
5. Start the backend server.

## Usage

- Open the application in your browser.
- Use the text editor to write or edit code snippets or notes.
- The content is automatically saved to IndexedDB and can be retrieved when reopening the application.
- Install the application on your device using the "Install" button for offline use.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Credits

This project was developed as part of a Progressive Web Application challenge. Special thanks to the contributors and instructors who provided guidance throughout the process.
