var servidor = require('http'); //el metodo requiereo el modulo http

function arrancaServidor(requiere, respuesta) {
    respuesta.writeHead(200,{"Content-Type":"text/html"}); // le digo que le enviare informacion de tipo html al servidor
    respuesta.write("<h1>El servidor funciona correctamente en el puerto 8888</h1>");
    respuesta.end();
}

servidor.createServer(arrancaServidor).lister(8888);