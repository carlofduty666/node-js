const http = require('http');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');

// Configuración de conexión a la base de datos
const connection = mysql.createConnection({
  host: '127.0.0.1', // Cambia 'localhost' por '127.0.0.1' si es necesario
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos',
  port: 3000 // Asegúrate de que este sea el puerto correcto
});

// Función para leer archivos
function readFiles(response, filePath, mimeType = 'text/html', codigoHTTP = 200) {
  fs.readFile(filePath, (error, content) => {
    if (!error) {
      response.writeHead(codigoHTTP, {'Content-type': mimeType});
      response.end(content);
    } else {
      const filePath = path.join(__dirname, '/views/http-screens/500.html');
      readFiles(response, filePath, codigoHTTP = 500);
    }
  });
}

// Crear el servidor
const server = http.createServer(function (request, response) {
  
  if (request.url === '/') {
    const filePath = path.join(__dirname, '/views/home.html');
    readFiles(response, filePath);
  
  } else if (request.url === '/login') {
    const filePath = path.join(__dirname, '/views/login.html');
    readFiles(response, filePath);
  
  } else if (request.url === '/register') {
    const filePath = path.join(__dirname, '/views/register.html');
    readFiles(response, filePath);
  
  } else if (request.url.match(/.(css)$/)) {
    const cssFileName = request.url.split('/').pop(); // Extrae el nombre del archivo CSS
    connection.query('SELECT content FROM css_files WHERE name = ?', [cssFileName], (error, results) => {
      if (error || results.length === 0) {
        const filePath = path.join(__dirname, '/views/http-screens/404.html');
        readFiles(response, filePath, 'text/html', 404);
      } else {
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.end(results[0].content); // Envía el contenido desde la base de datos
      }
    });
  
  } else if (request.url === '/javascript') {
    const filePath = path.join(__dirname, '/views/assets/js/app.js');
    readFiles(response, filePath, mimeType = 'text/javascript');
  
  } else {
    const filePath = path.join(__dirname, '/views/http-screens/404.html');
    readFiles(response, filePath, codigoHTTP = 404);
  }

});

// Iniciar el servidor
server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto: http://localhost:3000');
});