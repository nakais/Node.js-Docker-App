# Node.js Docker App

## Overview
This is a lightweight Node.js application running in Docker, connected to a MongoDB container.

### Features
- Simple REST API with Express.js.
- Dockerized using Docker and Docker Compose.
- CI/CD pipeline integration with Jenkins.
- Unit testing using Jest.

## How to Run

1. Build and run the application with Docker Compose:

    ```bash
    docker-compose up --build
    ```

2. Access the application at [http://localhost:3000](http://localhost:3000).

### Endpoints
- `GET /`: Returns a welcome message.
- `GET /items`: Lists all stored items.
- `POST /items`: Adds an item to the store.

### Testing
Run the following command to execute tests:

```bash
  npm test
```

### Jenkins CI/CD Pipeline
The Jenkins pipeline automates building, testing, and deploying the Docker container.

### License
This project is licensed under the MIT License.

1. Initialize a git repository if you haven't already:

```bash
git init
```
2. Add all your files:
```bash
git add .
```
3. Commit your changes:
```bash
git commit -m "Initial commit"
```
4.Create a repository on GitHub and push your local repo to it:
```bash
git remote add origin <your-repo-url>
git push -u origin main
```
