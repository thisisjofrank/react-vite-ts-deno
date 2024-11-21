# React Template with Vite and Deno

This is a GitHub template project to set up a [React](https://react.dev/) app
with TypeScript running on [Deno](https://deno.com). It uses
[Vite](https://vite.dev) as the dev server and an [oak](https://jsr.io/@oak/oak)
http server on the backend to serve the built project.

## Features

- React with TypeScript on the frontend
- Vite for the development server
- Deno for server-side JavaScript/TypeScript
- Oak framework for building web applications
- Static file serving
- Router setup

## Getting Started

### Prerequisites

- [Deno](https://docs.deno.com/runtime/) installed

### Installation

1. Create a new repository using this template. From the repository page, click
   the "Use this template" button in the top right hand of the page.

![Use this template](https://docs.github.com/assets/cb-76823/mw-1440/images/help/repository/use-this-template-button.webp)

2. Use the Owner dropdown menu to select the account you want to own the
   repository and set the repository name and visibility.

3. Clone the repository created to your local machine.

```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

## Run the dev server with vite

The react app uses a Vite dev server to run the app in development mode. To
start the dev server, run the following command:

```sh
deno task dev
```

## Build the app

To build the app for production, run the following command:

```sh
deno task build
```

## Run the backend server

The backend server uses Deno and the Oak framework to serve the built React app.
To start the backend server, run the following command:

```sh
deno task serve
```

## Running Tests

To run the tests, use the following command:

```sh
deno test -A
```

## Project Structure

. ├── client │ ├── dist │ ├── public │ └── src │ ├── App.tsx │ └── main.tsx └──
server ├── main.ts ├── main_test.ts └── util └── routeStaticFilesFrom.ts

- `App.tsx`: The main React component
- `main.tsx`: The entry point for the React app
- `main.ts`: The entry point for the Deno server
- `main_test.ts`: The test file for the Deno server
- `routeStaticFilesFrom.ts`: A utility function to serve static files
- `dist`: The output directory for the built React app
- `public`: The public directory for the React app

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
