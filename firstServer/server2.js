'use strict';

const http = require('http');
const person = require('./person.json');

const port = 3000;
const host = 'localhost';

const server = http.createServer((request, response)=> {

    response.writeHead(200, {
        'content-Type': 'application/json'
    });

    response.end(JSON.stringify(person));
    // response.end(JSON.stringify(person,null,2));
});

server.listen(port,host, 
    ()=>console.log(`Server ${host}:${port})is serving.....`));