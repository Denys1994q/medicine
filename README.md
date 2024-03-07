# Medicine Web Application

This repository contains the client and server parts of the Medicine web application.

## Public Version

The public version is available at: [Medicine Web App](https://medicine-theta.vercel.app)

## Local Setup

To run the project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/Denys1994q/medicine.git
    ```
2. Navigate to the cloned repository directory:
    ```bash
    cd medicine
    ```
3. Install dependencies for the client part:
    ```bash
    npm install
    ```
4. Create .env file file with a key REACT_APP_BASE_API_URL=http://localhost:4444
5. Run React app
    ```bash
    npm start
    ```
6. Open new terminal and move to a server folder
    ```bash
    cd medicine 
    cd server
    ```
7. Install dependencies for the server part:
    ```bash
    npm install
    ```
8. Create an .env file in the server folder with a key named MONGO_URI (value for key located in and env-example file on repository)
9. Run server locally:
    ```bash
    npm run dev
    ```
10. Client and server part must be executed in parallel terminals to ensure everything works correctly.
11. If you don`t need to work with a localhost server, you can work with a live server published on Render.com. For this set REACT_APP_BASE_API_URL=https://medicines-backend.onrender.com in an .env file and ignore all steps with server folder.
