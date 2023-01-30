import './style.css';

import createProject from "./classes/Project";
import createTask from "./classes/Task";
import createUserInterfaceManager from "./classes/UserInterfaceManager";


const element = document.createElement('p');
element.innerText = 'Todolist';
document.body.appendChild(element);


const UIManager = createUserInterfaceManager();

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

const testProject = createProject('Test');


testProject.addTask(task1);
testProject.addTask(task2);
testProject.addTask(task3);

console.log(testProject.getAllTasks());
console.log(task3.getTimeLeft());
console.log(testProject.getTask(0).printTask());



UIManager.appendBody(UIManager.createTaskCard(task1));
UIManager.appendBody(UIManager.createTaskCard(task2));
UIManager.appendBody(UIManager.createTaskCard(task3));

document.body.appendChild(UIManager.getBody());


