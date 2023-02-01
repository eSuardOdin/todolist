const createProjectMan = () => {
    const _projects = [];

    // Add a project
    const addProject = (project) => {
        _projects.push(project);
    }
    const removeProject = (index) => {
        if(_projects.length <= index) {
            console.error('Project not found');
        } else {
            _projects.slice(index, 1);
        }
    }
    const getProjects = () => _projects;
    const getProject = (index) => _projects[index];

    return {
        addProject,
        removeProject,
        getProjects,
        getProject,
    }
}

export default createProjectMan;