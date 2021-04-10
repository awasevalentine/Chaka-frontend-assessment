const {ROLE, projects } = require('../data');

function scopedProjects(user, projects){
    if(user.role === ROLE.ADMIN)
    return projects;
        return projects.filter(projects=> projects.userId === user.id);
}

function canViewProject(user, projects) {
        return(user.role === ROLE.ADMIN || projects.userId === user.id)
}

module.exports = {
    scopedProjects,
    canViewProject
}