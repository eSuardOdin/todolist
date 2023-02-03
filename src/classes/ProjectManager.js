const createProjectMan = (focusedProject) => {
    const _projects = [];

    let _focusedProject = focusedProject;
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

    const getSingleProject = (index) => _projects[index];

    const getFocusedProject = () => _focusedProject;

    const setFocusedProject = (project) => _focusedProject = project;
    return {
        addProject,
        removeProject,
        getProjects,
        getSingleProject,
        getFocusedProject,
        setFocusedProject,
    }
}

export default createProjectMan;