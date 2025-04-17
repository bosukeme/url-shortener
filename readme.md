# URL Shortener Service

A simple and efficient URL shortener built with TypeScript, Express.js, and MongoDB. This service allows users to convert long URLs into shortened versions and redirect users using the generated short codes.

## Features

- Shorten long URLs into short codes
- Redirect short codes to the original URLs
- Validate incoming URLs
- Prevent duplicate short codes
- Input validation using schemas
- Centralized error handling

## Tech Stack

- **Backend**: Express.js (Node.js/Typescript)
- **Database**: MongoDB
- **Middleware**: Error handling middleware for managing API errors
- **Validation**: Joi

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/bosukeme/url-shortener.git
    cd url-shortener
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Environment Variables
    Create a .env file in the root directory and configure the following:

        ```bash
        PORT=3000
        MONGO_URI=mongodb://localhost:27017/url-shortener
        BASE_URL=http://localhost:3000
        ```

4.  Run the server:
    ```bash
    npm run dev
    ```
    The API will be running at http://localhost:3000

## Testing

- You can use Postman to test the API.
- Import the provided Postman collection to quickly get started with testing the API endpoints.
- <a href="https://documenter.getpostman.com/view/8343801/2sB2cd3HUh" target="_blank"> Postman Collection URL </a>

## Contributing

If you would like to contribute, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bugfix.
- Submit a pull request.

## Authors

Ukeme Wilson

- <a href="https://www.linkedin.com/in/ukeme-wilson-4825a383/">Linkedin</a>.
- <a href="https://medium.com/@ukemeboswilson">Medium</a>.
- <a href="https://www.ukemewilson.sbs/">Website</a>.
