import './style.css';

import createProject from "./classes/Project";
import createTask from "./classes/Task";
import createUserInterfaceManager from "./classes/UserInterfaceManager";
import createProjectMan from './classes/ProjectManager';
import data from './data';
// Only for debug
const printProjects = (projects) => {
    projects.forEach(project => {
        console.warn('-----------------------------');
        console.log(project.getName());
        console.warn('-----------------------------');

        project.getAllTasks().forEach(task => {
            task.printTask();
        })
    });
};
const UIMan = createUserInterfaceManager(document.body);

const defaultProject = createProject('default');
const project1 = createProject('project1');
const project2 = createProject('project2');
const project3 = createProject('project3');
const projectsManager = createProjectMan();

projectsManager.addProject(defaultProject);
projectsManager.addProject(project1);
projectsManager.addProject(project2);
projectsManager.addProject(project3);

console.log(projectsManager.getProjects());
projectsManager.getProjects().forEach(proj => console.log(proj.getName()))

UIMan.refreshSidebar(projectsManager.getProjects());


// Adding the listeners

// Show the project Form
const projectFormBtn = document.querySelector('.project-form-btn');
projectFormBtn.addEventListener('click', () => {
    UIMan.showProjectForm();
    projectFormBtn.disabled = true;
});

// Create project / hide form

// NEED TO ADD ERROR / CANCEl
const createProjectBtn = document.querySelector('.create-project-btn');
createProjectBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('project-name').value;
    let isProjectExists = false;
    projectsManager.getProjects().forEach(project => {
        if(project.getName() === nameInput) isProjectExists = true;
    });

    if(isProjectExists) {
        UIMan.errProjectForm('Project already exists');
    } else {
        UIMan.hideProjectForm()
        projectFormBtn.disabled = false;
        projectsManager.addProject(createProject(nameInput));
        UIMan.refreshSidebar(projectsManager.getProjects());
    }
});



defaultProject.addTask(data.task1);
defaultProject.addTask(data.task2);

UIMan.refreshProjectTasks(projectsManager.getProject(0).getAllTasks());
console.log(projectsManager.getProject(0).getAllTasks());









