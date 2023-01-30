import createProject from "./classes/Project";
import createTask from "./classes/Task";


const element = document.createElement('p');
element.innerText = 'Todolist';
document.body.appendChild(element);


const task1 = createTask(
    'Première tâche',
    'Voyons voir ce que ça donne en pratique',
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
    'Celle ci sera supprimée',
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


// console.log(testProject.getName());
// testProject.addTask('Ranger sa chambre');
// testProject.addTask('Ranger la couisine');
// testProject.addTask('Sortir le doggo');
// testProject.addTask('Manger des chips');
// testProject.addTask('Afficher toutes les tâches');
// testProject.addTask('Zoomer sur cette tâche');
// testProject.addTask('Supprimer sur cette tâche');


// console.log(testProject.getAllTasks());
// console.log(testProject.getTask(5));
// console.log(testProject.getTask(9));

// testProject.removeTask(6);
// console.log(testProject.getAllTasks());
