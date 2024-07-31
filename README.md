# Portfolio Site Docker Setup

## Getting Started

This README will guide you through setting up the Docker container to run the portfolio site at `localhost:5575`.


### Prerequisites

- Docker installed on your machine.
- Node.js and npm installed on your machine.
- Storybook installed in your machine.

### Setup Instructions

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/mjuyo/webd3012_coding_assignment_14.git
    ```

2. Navigate to the repository directory:
    
    ```bash
    cd webd3012_coding_assignment_14
    ```

3. Build the Docker image:

    ```bash
    docker build -t mjuyo:14.0 .
    ```

4. Run the Docker container with the specified name:

    ```bash
    docker run -p 5575:80 -d --name juyo_marco_coding_assignment14 mjuyo:14.0
    ```

5. Open your browser and go to `http://localhost:5575`. You should see a webpage with the portfolio components.


## Testing

1. To run tests, use:

    ```bash
    npm run test
    ```

## Project Structure

- `Dockerfile`: Contains the instructions to build the Docker image.
- `package.json`: Lists the project dependencies.
- `src/App.tsx`: Main React component.
- `src/components`: Folder where the components are located.
- `README.md`: This file with setup instructions.


