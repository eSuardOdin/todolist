import './style.css';

import createProject from "./classes/Project";
import createTask from "./classes/Task";
import createUserInterfaceManager from "./classes/UserInterfaceManager";

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
const task1 = createTask(
    'Première tâche',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quia illo labore aliquam dicta molestiae velit, praesentium iste laborum tempora quas corrupti quod nostrum distinctio cum voluptate dolores! Unde, autem!',
    new Date(2023, 11, 15),
    2,
    [
        'Première étape',
        'Deuxième étape'
        
    ],
    false,
    false
    );
    
const task2 = createTask(
    'Deuxième tâche',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati fuga odio quisquam incidunt facere voluptatibus nisi expedita accusamus iste dolor itaque rerum neque animi iusto tempore dicta ex, voluptatum modi eum ad molestiae mollitia unde quos laboriosam. Magnam architecto itaque aperiam minus ducimus. Dolorum ex accusamus impedit cum distinctio nisi dolore debitis temporibus eos a fugiat necessitatibus velit quaerat placeat, voluptatem, commodi asperiores dolorem officia consequatur pariatur? Laboriosam, quisquam? Provident esse sequi eos nam ratione nesciunt illo ipsa, maiores at.',
    new Date(2023, 2, 4),
    5,
    [
        'Une seule étape'
        
    ],
    false,
    false
    );
    
    const task3 = createTask(
        'Troisième tâche',
        'Alors que celle ci va bien rester dans le projet',
        new Date(2023, 2, 1),
        3,
        [],
        false,
    false
    );
    
    const task4 = createTask(
        'DeuxièmeProjet',
        'Celle-ci va dans le deuxième projet',
        new Date(2023, 4, 8),
        3,
        [],
        false,
        false
    );
    // Default project with tasks added to it
    const defaultProject = createProject('Default Project');
    defaultProject.addTask(task1);
    defaultProject.addTask(task2);
    defaultProject.addTask(task3);
    
    // New project, added one task to it
    const newProject = createProject('New Project');
    newProject.addTask(task4);
    
    // List of projects
    const projects = [];
    projects.push(defaultProject);
    projects.push(newProject);







    const UIManager = createUserInterfaceManager();
    UIManager.appendBody(UIManager.createTaskCard(task1));
    UIManager.appendBody(UIManager.createTaskCard(task2));
    UIManager.appendBody(UIManager.createTaskCard(task3));

document.body.appendChild(UIManager.getBody());




// Test :





