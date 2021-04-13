const http = require('http')
const fs = require('fs')
const data = require('../users.json')
const users = data.users
const server = http.createServer((req, res) => {
    if (req.url === '/raw-html') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>Welcome</h1>')
    }
    else if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        fs.readFile('./pureNode/index.html', null, (err, data) => {
            if (err) {
                res.writeHead(404)
                res.write('File not found')
            } else {
                res.write(data)
            }
            res.end()
        })
    }
    else if (req.url === '/users' && req.method === 'GET') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(users))
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
    }

})
const port = 8000
server.listen(port, () => console.log(`server is running on port ${port}`))