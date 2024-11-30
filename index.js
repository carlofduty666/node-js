const http = require('http');

const server = http.createServer(function (request, response) {
  if (request.url === '/' ) {
    // console.log('Esta es la pagina principal')
    response.writeHead(200, {'Content-type': 'text/html'})
    response.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
      </head>
      <body>
      <h1>Esta es la pagina principal</h1>

      <img src="https://media.mutualart.com/Images/2021_03/02/14/145822677/e3bc78ba-83f0-46d0-bd20-fa068a91d0cc.Jpeg">
        
      </body>
      </html>
    `


    )
  } else if (request.url === '/pepe' ) {
    console.log('Esta es la pagina de pepe')

  }

})

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto: http://localhost:3000')
})