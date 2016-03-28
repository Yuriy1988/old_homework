var json = require('./client/data.json'),
    towns = require('./client/data.json'),
    http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    newTown;


http.createServer(function (request, response) {
    var uri = 'client/' + url.parse(request.url).pathname,
        filename = path.join(process.cwd(), uri),
        body = [],
        id;

    function responde(value) {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.write(value);
        response.end();
    }

    response.writeHead(200, {"Content-Type": "text/plain"});

    if (Number((uri).substring(18)) > 0 || request.method === 'POST') {

        request.on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function () {
            body = Buffer.concat(body).toString();
            id = Number((uri).substring(18));


            if (request.method === 'PUT') {
                console.log('method is put, and i\'m trying to update town with id ' + id + ' with data: ' + body);
                updateTown();
                responde(body);
                fs.writeFile('./client/data.json', JSON.stringify(towns));
            }

            if (request.method === 'DELETE') {
                console.log('method is delete, and i\'m trying to delete town with id ' + id);
                deleteTown();
                fs.writeFile('./client/data.json', JSON.stringify(towns));
            }

            if (request.method === 'POST') {
                console.log('method is post, and i\'m trying try to add town with body ' + body);
                newTown = JSON.parse(body);
                console.log(body);
                console.log(newTown);
                newTown.id = new Date().getTime();
                towns.push(newTown);
                responde((JSON.stringify(newTown)));
                fs.writeFile('./client/data.json', JSON.stringify(towns));
            }
        })
    } else {

        fs.exists(filename, function (exists) {
            if (!exists) {
                response.writeHead(404, {"Content-Type": "text/plain"});
                response.write("404 ERROR - PAGE NOT FOUND");
                response.end();
                return;
            }

            if (fs.statSync(filename).isDirectory()) {
                filename += '/index.html';
            }

            fs.readFile(filename, "binary", function (err, file) {
                response.writeHead(200);
                response.write(file, "binary");
                response.end();
            });
        });
    }

    function updateTown() {
        towns.forEach(function (town, i) {
            if (town.id === id) {
                towns[i] = JSON.parse(body);
            }
        });
    }

    function deleteTown() {
        towns.forEach(function (town, i) {
            if (town.id === id) {
                towns.splice(i, 1);
            }
        })
    }
}).
    listen(3000);