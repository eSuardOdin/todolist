import './style.css';

import createProject from "./classes/Project";
import createTask from "./classes/Task";
import createProjectMan from './classes/ProjectManager.js';
import createUserInterfaceManager from './classes/UserInterfaceManager';


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

// Test :





