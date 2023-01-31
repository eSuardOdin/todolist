const createUserInterfaceManager = (body) => {
    // All skeletons elements of the page
    const _body = body;
    const _container = document.createElement('div');
    _container.classList.add('base-page-container');
    const _header = document.createElement('div');
    _header.classList.add('header');
    const _sidebar = document.createElement('div');
    _sidebar.classList.add('sidebar');
    _sidebar.innerHTML = `
        <h2>Projects</h2>
        <ul class="project-list"></ul>
        <button>+ Project</button>`;
    const _main = document.createElement('div');
    _main.classList.add('main');
    const _footer = document.createElement('div');

    _container.appendChild(_header);
    _container.appendChild(_sidebar);
    _container.appendChild(_main);
    _container.appendChild(_footer);

    _body.appendChild(_container);

    // Create a card from a task
    const createTaskCard = (task) => {
        // Card container
        const container = document.createElement('div');
        container.classList.add('task-card-container');
        // Card title
        const title = document.createElement('p');
        title.innerText = task.getTitle();
        title.classList.add('task-card-title');
        // Card description
        const description = document.createElement('p');
        description.innerText = task.getDescription();
        description.classList.add('task-card-description');
        // Pre footer
        const preFooter = document.createElement('div');
        preFooter.classList.add('task-card-pre-footer');

        const dueDate = document.createElement('p');
        dueDate.innerText = task.getDueDate().toDateString();
        const timeLeftText = document.createElement('p');
        const timeLeft = task.getTimeLeft();
        timeLeftText.innerText = `${timeLeft.days} days and ${timeLeft.hours} hours left`;
        const priority = document.createElement('p');
        priority.innerText = `Priority : ${task.getPriority()}`;
        preFooter.appendChild(dueDate);
        preFooter.appendChild(timeLeftText);
        preFooter.appendChild(priority)


        // Append all to container  
        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(preFooter);
        return container;
    }

    // Show all projects in sidebar
    const refreshSidebar = (projects) => {
        const list = document.querySelector('.project-list');
        projects.forEach(project => {
            const el = document.createElement('li');
            el.innerText = project.getName();
            list.appendChild(el);
        });
    }

    const appendTo = (parent, child) => {
        parent.appendChild(child);
    }
    
    const clearBody = () => {
        _body.innerHTML = '';
    }

    const getBody = () => _body;
    
    return {
        createTaskCard,
        refreshSidebar,
        clearBody, 
        getBody,
    };
}

export default createUserInterfaceManager;