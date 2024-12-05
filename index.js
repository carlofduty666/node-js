const http = require('http'); // modulo que permite crear un servidor
const path = require('path'); // modulo que permite trabajar con rutas
const fs = require('fs'); // modulo que permite leer archivos

const { connectDB } = require('./db/db.js');

// console.log(__dirname); // indica la ruta del directorio actual
// console.log(__filename); // indica la ruta del archivo actual

function readFiles(response, filePath, mimeType = 'text/html', codigoHTTP = 200) {
  fs.readFile(filePath, (error, content) => { // lee el archivo y lo muestra en el navegador
    if (!error) {
      response.writeHead(codigoHTTP, {'Content-type': mimeType})
      response.end(content);
    } else {
      const filePath = path.join(__dirname, '/views/http-screens/500.html')
      readFiles(response, filePath, codigoHTTP = 500);
    }
  });
}

const server = http.createServer(function (request, response) {
  console.log(`Requested URL: ${request.url}`);
  if (request.url === '/') {
    const filePath = path.join(__dirname, '/views/home.html') // ruta de la carpeta views y el archivo home.html
    readFiles(response, filePath);
  }
  
  else if (request.url === '/login' ) {
    console.log('Login page');
    const filePath = path.join(__dirname, '/views/login.html');
    readFiles(response, filePath);
  }

  else if ( request.url === '/register' ) {
    console.log('Register page');
    const filePath = path.join(__dirname, '/views/register.html');
    readFiles(response, filePath);
  }
  
  else if ( request.url === '/style.css' ) {
    const filePath = path.join(__dirname, '/views/assets/css/style.css');
    readFiles(response, filePath, mimeType = 'text/css');
  }

  else if ( request.url === '/javascript' ) {
    const filePath = path.join(__dirname, '/views/assets/js/app.js');
    readFiles(response, filePath, mimeType = 'text/javascript');
  }

  // else if (request.url.match(/.(css)$/)) {
  //   const filePath = path.join( __dirname, `views\assets${request.url}`);
  //     readFiles(response, filePath, mimeType = 'text/css', 500);
  // }

  // else if (request.url.match(/.(js)$/)) {
  //   const filePath = path.join( __dirname, `/views/assets/js/${request.url}`);
  //     readFiles(response, filePath, mimeType = 'text/javascript', 500);
  // }

  // if (request.url.match(/.(html)$/)) {
    //   const filePath = path.join(__dirname, `/views/${request.url}`);
    //     readFiles(response, filePath, mimeType = 'text/html', 500);
    // }

  // else if (request.url.match(/.(css)$/)) {
  //     const filePath = path.join(__dirname, `/views/assets/css/${request.url}`);
  //     readFiles(response, filePath, mimeType = "text/css");
  // }
  
  

  else {
    const filePath = path.join(__dirname, '/views/http-screens/404.html');
    readFiles(response, filePath, codigoHTTP = 404);
  }

});

connectDB().then( () => {
  server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto: http://localhost:3000')
  });
});