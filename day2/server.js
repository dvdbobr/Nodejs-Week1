const http = require('http')
const url = require('url')
const data = require('./users.json')
const port = 8001;
const users = data.users

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true).query;
    console.log(q)
    console.log(req.url)
    if (req.method === 'GET') {
        if (req.url === '/users')
            res.write(JSON.stringify(users));
        else if (req.url.includes('users')) {
            if (q.id)
                res.write(JSON.stringify(users.filter(user => user.id == q.id)))
            else if (q.capsule)
                res.write(JSON.stringify(users.filter(user => user.capsule == q.capsule)))
        }
        // if (req.url === '/getGreeting') {
        //     res.write("Hello");
        // }
        // if(req.url==='/getUsers'){
        //     res.write(JSON.stringify(users));
        // }

    }
    res.end();
})
server.listen(port, () => {
    console.log("server is running at port", port)
})