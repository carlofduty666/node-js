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
      <p> But i'd rather be fundametally between your legs, your hands and the rough grass of your thighs.<br>
      i really enjoyed die Nacht bei dir.</p>

      <img src="https://media.mutualart.com/Images/2021_03/02/14/145822677/e3bc78ba-83f0-46d0-bd20-fa068a91d0cc.Jpeg">
        
      </body>
      </html>
    `
    )
  } else if (request.url === '/pepe' ) {
    console.log('Evidencia de la pagina de Pepe')
    response.end(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
      </head>
      <body>
      <h1>Esta es la pagina de Pepe</h1>

      <img src="https://banner2.cleanpng.com/20240403/kay/transparent-pepe-the-frog-cartoon-frog-hanging-from-stick-sad-expression660db9ca00e2b9.32743919.webp">
        
      </body>
      </html>
    `)

  }

})

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto: http://localhost:3000')
})