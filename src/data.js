import createTask from "./classes/Task";
import createProject from "./classes/Project";


const task1 = createTask(
    'Première tâche',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quia illo labore aliquam dicta molestiae velit, praesentium iste laborum tempora quas corrupti quod nostrum distinctio cum voluptate dolores! Unde, autem!',
    new Date(2025, 11, 15),
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
    new Date(2025, 2, 4),
    5,
    [
        'Une seule étape'
        
    ],
    false,
    false
    );
    
    const task3 = createTask(
        'Troisième tâche',
        'BLABLALALBLALABLABLAB',
        new Date(2025, 2, 1),
        3,
        [],
        false,
    false
    );
    
    const task4 = createTask(
        'DeuxièmeProjet',
        'Celle-ci va dans le deuxième projet',
        new Date(2025, 4, 8),
        3,
        [],
        false,
        false
    );

const data = {task1, task2, task3, task4};
export default data; 