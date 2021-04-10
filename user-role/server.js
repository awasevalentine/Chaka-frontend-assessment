
const express = require('express');
const ws = require('ws');
const { ROLE, users } = require('./data');
const { authUser, authRole } = require('./my-basicAuth');
const projectsRoute = require('./routes/my-projects');

const app = express();

app.use(express.json())
app.use(setUser)

app.use('/projects', projectsRoute)
app.get('/', (req, res)=>{
    res.send('welcome to home  page')
});

app.get('/dashboard', authUser, (req, res)=>{
    res.send('Dashboard')
});

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res)=>{
    res.send('admin')
});

function setUser(req, res, next){
    const userId = req.body.userId;
    if(userId) {
        req.user = users.find(user=> user.id === userId)
    }
    next()
}

const httpServer = app.listen(3000, ()=>{
    console.log(`server is running on localhost: 3000`);
});


// websocket 

const messages = [];

const webSocketServer = new ws.Server({server: httpServer});
console.log(`websocket is listening on localhost:3000`);

webSocketServer.on('connection', wsClient =>{
    wsClient.send(JSON.stringify(messages));

    wsClient.on('error', (error) => {
        console.log(`the server received: ${error}`);
    });
    wsClient.on("message", function incoming(data) {
        console.log(data);
        messages.push(data);    
        webSocketServer.clients.forEach(function connection(client){
            if(client.readyState === ws.OPEN){
                client.send( JSON.stringify(messages))
            }
        })
        console.log('check:', messages);


        
    });

    
    wsClient.onclose = (why) =>
    console.log(`The server received: ${why.code} ${why.reason}`);
    console.log(`Connections count: ${webSocketServer.clients.size}`)
   // wsClient.onmessage = (message) => console.log(`the server received: ${message.data}`);
});



