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
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati fuga odio quisquam incidunt facere voluptatibus nisi expedita accusamus iste dolor itaque rerum neque animi iusto tempore dicta ex, voluptatum modi eum ad molestiae mollitia unde quos laboriosam. Magnam architecto itaque aperiam minus ducimus. Dolorum ex accusamus impedit cum distinctio nisi dolore debitis temporibus eos a fugiat necessitatibus velit quaerat placeat, voluptatem, commodi asperiores dolorem officia consequatur pariatur? Laboriosam, quisquam? Provident esse sequi eos nam ratione nesciunt illo ipsa, maiores at.',
        new Date(2024, 2, 1),
        1,
        [],
        false,
    false
    );
    
    const task4 = createTask(
        'Quatrième tâche',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati fuga odio quisquam incidunt facere voluptatibus nisi expedita accusamus iste dolor itaque rerum neque animi iusto tempore dicta ex, voluptatum modi eum ad molestiae mollitia unde quos laboriosam. Magnam architecto itaque aperiam minus ducimus. Dolorum ex accusamus impedit cum distinctio nisi dolore debitis temporibus eos a fugiat necessitatibus velit quaerat placeat, voluptatem, commodi asperiores dolorem officia consequatur pariatur? Laboriosam, quisquam? Provident esse sequi eos nam ratione nesciunt illo ipsa, maiores at.',
        new Date(2023, 4, 8),
        4,
        [],
        false,
        false
    );

    const task5 = createTask(
        'Cinquième tâche',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati fuga odio quisquam incidunt facere voluptatibus nisi expedita accusamus iste dolor itaque rerum neque animi iusto tempor voluptatum modi eum ad molestiae mollitia unde quos laboriosam. Magnam architecto itaque aperiam minus ducimus. Dolorum ex accusamus impedit cum distinctio nisi dolore ceat, voluptatem, commodi asperiores dolorem officia consequatur pariatur? Laboriosam, quisquam? Provident esse sequi eos nam ratione nesciunt illo ipsa, maiores at.',
        new Date(2023, 10, 12),
        3,
        [],
        false,
        false
    );

    const task6 = createTask(
        'Sixième tâche',
        'Lorem ipsum dolor, sit amet conslaceat, voluptatem, commodi asperiores dolorem officia consequatur pariatur? Laboriosam, quisquam? Provident esse sequi eos nam ratione nesciunt illo ipsa, maiores at.',
        new Date(2023, 8, 22),
        2,
        [],
        false,
        false
    );

    const task7 = createTask(
        'Septième tâche',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati fuga odio quisquam incidunt facere voluptatibus nisi expedita accusamus iste dolor itaque rerum neque animi iusto tempore dicta ex, voluptatum modi eum ad molestiae mollitia unde quos laboriosam. Magnam architecto itaque aperiam minus ducimus. Dolorum ex accusamus impedit cum distinctio nisi dolore debitis temporibus eos a fugiat necessitatibus velit quaerat placeat, voluptatem, commodi asperiores dolorem officia consequatur pariatur? Laboriosam, quisquam? Provident esse sequi eos nam ratione nesciunt illo ipsa, maiores at. Mollitia unde quos laboriosam. Magnam architecto itaque aperiam minus ducimus. Dolorum ex accusamus impedit cum distinctio nisi dolore debitis temporibus eos a fugiat necessitatibus velit quaerat placeat, voluptatem, commodi asperiores dolorem officia consequatur pariatur.',
        new Date(2023, 11, 30),
        3,
        [],
        false,
        false
    );

    const task8 = createTask(
        'Huitième tâche',
        'Lorem ipsum dolor, sit amet consectetur adipisisequi eos nam ratione nesciunt illo ipsa, maiores at. Mollitia unde quos laboriosam. Magnam architecto itaque aperiam minus ducimus. Dolorum ex accusamus impedit cum distinctio nisi dolore debitis temporibus eos a fugiat necessitatibus velit quaerat placeat, voluptatem, commodi asperiores dolorem officia consequatur pariatur.',
        new Date(2024, 3, 28),
        1,
        [],
        false,
        false
    );

    const task9 = createTask(
        'Neuvième tâche',
        'Lorem ipsum dolor, sit amet consecteturusamus impedit cum distinctio nisi dolore debitis temporibus eos a fugiat necessitatibus velit quaerat placeat, voluptatem, commodi asperiores dolorem officia consequatur pariat adipisisequi eos nam ratione nesciunt illo ipsa, maiores at. Mollitia unde quos laboriosam. Magnam architecto itaque aperiam minus ducimus. Dolorum ex accusamus impusamus impedit cum distinctio nisi dolore debitis temporibus eos a fugiat necessitatibus velit quaerat placeat, voluptatem, commodi asperiores dolorem officia consequatur pariatedit cum distinctio nisi dolore debitis temporibus eos a fugiat necessitatibus velit quaerat placeat, voluptatem, commodi asperiores dolorem officia consequatur pariatur.',
        new Date(2023, 5, 13),
        2,
        [],
        false,
        false
    );

const data = {task1, task2, task3, task4, task5, task6, task7, task8, task9};
export default data; 