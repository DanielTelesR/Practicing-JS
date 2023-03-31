const http = require('http'); // HTTP module imported
const porta = 443 // I used the default https setup port.

// Server 

const servidor = http.createServer((req,res) => {
  res.writeHead(200, {'Content-type':'text/plain'})
  res.write('Primeiro servidor Node')
  res.end()
})

servidor.listen(porta, () =>{console.log('Servidor rodando')});