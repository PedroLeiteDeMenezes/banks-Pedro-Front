# React App for Banks Pedro API

## Overview
This is a **React** application that serves as a frontend client for interacting with the **Banks Pedro API**. It allows users to create and manage their bank accounts, perform transactions, and check account balances in an intuitive web interface.

## Features
- **User Registration:** Register new users with the banking system.
- **Login/Authentication:** Secure login system using token-based authentication (JWT).
- **Account Management:** View account details, check balances, and update user information.
- **Transactions:** Perform deposits, withdrawals, and transfers between accounts.
- **Transaction History:** View transaction logs for each user account.

## Technologies Used
- **React.js:** Frontend framework for building the user interface.
- **Axios:** For making HTTP requests to the Banks Pedro API.
- **React Router:** For managing routes and navigation within the app.
- **CSS/Bootstrap:** Styling and layout for the application.
- **JWT Authentication:** Securely handling login and token storage.
  
## Getting Started

### Prerequisites
- **Node.js** and **npm** installed on your machine.

### Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/react-banks-pedro.git
    cd react-banks-pedro
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**  
   Create a `.env` file in the root directory to store your API URL and other configurations. Example:
    ```plaintext
    REACT_APP_API_URL=http://localhost:3000/api
    ```

4. **Run the app:**
    ```bash
    npm start
    ```

   The app will run locally on [http://localhost:3000](http://localhost:3000).

### API Integration
This app communicates with the **Banks Pedro API** to perform operations like user authentication, account management, and transaction handling. Axios is used to send HTTP requests to the backend API.

## Available Scripts

- **`npm start`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm test`**: Runs the tests.
- **`npm run eject`**: Ejects the app configuration.

## Folder Structure
```plaintext
├── public
├── src
│   ├── components        # Reusable React components (e.g., LoginForm, AccountDetails)
│   ├── pages             # Main pages (e.g., Home, Dashboard, Transactions)
│   ├── services          # API service (Axios configuration, API calls)
│   ├── App.js            # Main application component
│   └── index.js          # Application entry point
├── .env                  # Environment variables (API URL)
├── package.json
└── README.md
