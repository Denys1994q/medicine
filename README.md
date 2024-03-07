# Medicine Web Application

This repository contains the client and server parts of the Medicine web application.

## Public Version

The public version is available at: [Medicine Web App](https://medicine-theta.vercel.app)

## Local Setup

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Denys1994q/medicine.git
2. Navigate to the cloned repository directory:
    ```bash
    cd medicine-app
3. Install dependencies for the client part:
    npm install
4. Run React app
    npm start 
5. Open new terminal and move to a server folder
    cd server
6. Install dependencies for the server part:
    npm install
5. Run server locally:
    npm run dev 
6. Client and server part must be executed in parallel terminals to ensure everything works correctly.
7. The server runs locally on port 4444. Therefore, to work locally, you need to change the value of REACT_APP_BASE_API_URL in the .env file to http://localhost:4444 






