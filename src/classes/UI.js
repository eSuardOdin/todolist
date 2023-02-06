const createUI = (body) => {
    
    // Instanciate base page skeleton and UI elements to manage
    // #region
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
        <button class="project-form-btn">Add Project</button>`;
    const _main = document.createElement('div');
    _main.innerHTML = `
    <h1 class="main-project-title"></h1>
    <div class="main-tasks-container"></div>
    <button class="task-form-btn">Add a task</button>
    `;
    _main.classList.add('main');
    const _footer = document.createElement('div');
    _footer.classList.add('footer');

    // Creating hidden elements (need to add task form)
    const _projectFormContainer = document.createElement('div');
        _projectFormContainer.classList.add('form-container');
        _projectFormContainer.classList.add('hidden');

        _projectFormContainer.innerHTML = `
        <p class="project-form-title">Create a new project : </p>
        <form action="#">
            <label for="project-name">Project name : </label>
            <input type="text" name="project-name" id="project-name">
        </form>
        <p class="project-error"></p>
        <div>
            <button class="create-project-btn">Create Project</button>
            <button class="cancel-project-btn">Cancel</button>
        </div>
    `;
    
    _container.appendChild(_header);
    _container.appendChild(_sidebar);
    _container.appendChild(_main);
    _container.appendChild(_footer);
    
    _body.appendChild(_container);
    _body.appendChild(_projectFormContainer);
    // #endregion

    const refreshSidebar = (projects) => {
        const list = document.querySelector('.project-list');
        list.innerHTML = '';
        let index = 0;
        projects.forEach(project => {
            const el = document.createElement('li');
            el.setAttribute('id', `p${index}`);
            el.classList.add('side-project');
            el.innerText = project.getName();
            list.appendChild(el);
            index++;
        });
    };

    const refreshMain = (projectManager, index) => {
        _main.innerHTML = `
        <h1 class="main-project-title"></h1>
        <div class="main-tasks-container"></div>
        <button class="task-form-btn">Add a task</button>
        `;
        const title = projectManager.getSingleProject(index).getName();
        const message = document.querySelector('.main-project-title');
        message.innerText = title;
    };

    const showForm = (type) => {
        if(type === 'project') {
            _projectFormContainer.classList.remove('hidden');
            _container.classList.add('blur'); 
        }
    }; 

    const hideForm = (type) => {
        if(type === 'project') {
            _projectFormContainer.classList.add('hidden');
            _container.classList.remove('blur'); 
        }
    }; 

    const print = (element, value) => {
        element.innerText = value;
    }

    return{
        refreshSidebar, 
        refreshMain,
        showForm,
        hideForm,
        print
    }
};

export default createUI;
