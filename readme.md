<h1  align="center">Apteco Express</h1>
 
<h2  align="center">Purpose of the App:</h2>
 
<h3 align="center">To fetch data from the Apteco API and return it to my front-end Angular application.<p>
 
<h2 align="center">Technology used</h2>
 
<div align="center">
  <img align="center" src="/assets/readme-icons/node.svg" alt="HTML" height="50"/>
  <p align="center">NodeJS</p>
</div>

<h2 align="center">How The Application Works</h2>

- The application initializes an express server in the index.js file which pulls data from the /api/data route.
- The api route uses Axios to make a POST request to the Apteco API passing the body and headers in the config.
- The access token is stored in the .env for development and on the vercel server for production.
- The data is returned as the 'res' parameter of the router and is available using the '/api/data' route.
- I use a GET request in my Angular project to the above route and I can push the data into my material table.
