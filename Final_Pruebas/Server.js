const http = require('http'); // Importamos modulo para crear servidor web
const fs = require('fs'); // Importando mudulo para leer archivos del sistema de archivos
const path = require('path'); // Importando el modulo para manejar rutas de archivos y directorios

const server = http.createServer((Requiere, Resultado) =>
{
    const filePath = path.join(__dirname, Requiere.url === '/' ? 'Hola_Mundo.html' : Requiere.url);
    //Construimos la ruta
    //__dirname: es una variable global en Node.js que representa el directorio actual en el que se encuentra el archivo de código en ejecución.
    
    fs.readFile(filePath, (Error, Datos) =>
    {
        if (Error)
        {
            Resultado.writeHead(404, { 'Content-Type': 'text/plain' });
            Resultado.write('404 Not Found');
            Resultado.end();
        }
        else
        {
            Resultado.writeHead(200, { 'Content-Type': 'text/html' });
            Resultado.write(Datos);
            Resultado.end();
        }
    });
});

const port = 3000;
server.listen(port, () =>
{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});