const express = require('express');
const { projects, ROLE } = require('../data');
const { authUser } = require('../my-basicAuth');
const { scopedProjects, canViewProject } = require('../permission/my-own-permission');

const router = express.Router()


router.get('/', authUser, (req, res)=> {
    res.send(scopedProjects(req.user, projects))
});

router.get('/:projectId',setProject, authUser, getProject, (req, res)=> {
    res.json(req.projects)
});


function getProject(req, res, next) {
    if(!canViewProject(req.user, req.projects)){
        res.status(401)
        res.json('Not allowed!')
    }
    next()
}
function setProject(req, res, next) {
    const projectId = parseInt(req.params.projectId);
    req.projects = projects.find(project => project.id === projectId);
    if(req.projects == null){
        res.status(404)
        return res.send('project not found!');
    }
    next();
}



module.exports = router