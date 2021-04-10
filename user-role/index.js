
const express = require('express');
const bodyparser = require('body-parser');
const {ROLE, users} = require('./data');
const projectRouter = require('./routes/projects');
const {authUser, authRole } = require('./basicAuth');

const app = express();

app.use(express.json())
app.use(setUser)
app.use('/projects', projectRouter)

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.get('/dashboard', authUser, (req, res) => {
    res.send('Dashboard Page');
})

app.get('/admin', authUser, authRole(ROLE.ADMIN),  (req, res) =>{
    res.send('Admin');
})

function setUser(req, res, next) {
    const userId = req.body.userId;
    if(userId) {
        req.user = users.find(user => user.id === userId)
        console.log(req.user)
    }

    next();
}

app.listen(3000, ()=>{
    console.log('server running on localhost:3000');
})



