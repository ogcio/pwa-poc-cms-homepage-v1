# Gov.ie Home page implemented with Web Components 

### Project layout

- `/src`: source files
- `/conf`: webpack configuration files
- `/dist`: output folder for build files

To run the project locally:

- run `npm install` once
- run `npm start`

The project is now served on `http://localhost:9000/`

To build:

- run `npm run build`

The build files are located in the `/dist` folder.

`/src/index.html` is the template file for the index file on production.
Here the entry point bundle will be injected into by Webpack.

