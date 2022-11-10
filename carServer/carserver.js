' use strict';

const http = require('http');

const {port, host} = require('./config.json');

const storage = require('./carStorage');

const server = http.createServer((req,res)=>{
    const {
        pathname,
        searchParams
    } = new URL (`http://${req.headers.host}${req.url}`);

    let resultHtml=''
    if(pathname==='/cars'){
        resultHtml=createCarsHtml(storage.getAllCars());
    }
    else if (pathname==='./cartypes') {
        resultHtml =createCarsTypes(storage.getAllModels());
    }

    else if (pathname==='/search'){
        resultHtml = '<h1>Search</h1>';
    }

    else {
        resultHtml='<h1>Error</h1>';
    }
    res.writeHead(200,{ 
        'Content-Type':'text/html;charset=utf-8'
    });
    res.end(resultHtml);
});

server.listen(port,host,()=>console.log(`${host}:${port} running...`));

function createCarsHtml(carArray){
  let  htmlString= `
    <!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cars</title>
</head>
<body>
    <h1>Search Result</h1>`;

    if(carArray.length===0{
        htmlString+='<h2>No cars found</h2>' 
    } else {
        htmlString+=` <table>
        <thead>
            <tr><th>Model</th><th>License</th></tr>
        </thead>
        <tbody>`;
        for(const car of carArray){
            htmlString+=`</tr>
            <td>${car.model}</td><td>${car.license}</td>
        }
        </tbody>
    </table>
    
</body>
</html> `
    
    }
}

function createCarTypes(typesArray){
    let htmlString =`<!DOCTYPE html>
    <html lang="en">
    <head>
    
        <meta charset="UTF-8">
       
        <title>Types</title>
    </head>
    <body>
        <h1>Car Models</h1>
        <ul>
        <li>${}</li><li>${}</li>
        </ul>
    </body>
    </html>
    
    
    
    
    
    
    `
}