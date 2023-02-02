
const createUserInterfaceManager = (body, projectMan) => {
    const _projectManager = projectMan;
    // Instanciate base page skeleton and UI elements to manage
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
        <button class="project-form-btn">+ Project</button>`;
    const _main = document.createElement('div');
    _main.classList.add('main');
    const _footer = document.createElement('div');



    // Creating hidden elements
    const _formContainer = document.createElement('div');
        _formContainer.classList.add('form-container');
        _formContainer.classList.add('hidden');

        _formContainer.innerHTML = `
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
    _body.appendChild(_formContainer);
    
    const _createProjectBtn = document.querySelector('.create-project-btn');
    _createProjectBtn.addEventListener('click', () => {
        const nameInput = document.getElementById('project-name').value;
        let isProjectExists = false;
        _projectManager.getProjects().forEach(project => {
            if(project.getName() === nameInput) isProjectExists = true;
        });
    
        if(isProjectExists) {
            errProjectForm('Project already exists');
        } else {
            hideProjectForm()
            _createProjectBtn.disabled = false;
            _projectManager.addProject(createProject(nameInput));
            refreshSidebar(_projectManager.getProjects());
        }
    });




// ----------------------------------------------------------------------

    /**
     * Create an HTML task card 
     * @param {task} task 
     * @returns a task as a card in order to append it as an html element
     */
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



// ----------------------------------------------------------------------
    // Show all projects in sidebar

    /**
     * Refresh the side bar in order to display all projects.
     * Does not returns anything as it appends to side bar in method
     * 
     * o------------------------------------------------------o
     * |                                                      |
     * | Do I need to separate element creation and display ? |
     * |                                                      |
     * o------------------------------------------------------o
     * @param {projectManager} projects 
     */
    const refreshSidebar = () => {
        const list = document.querySelector('.project-list');
        list.innerHTML = '';
        _projectManager.getProjects().forEach(project => {
            const el = document.createElement('li');
            el.classList.add('side-project');
            el.innerText = project.getName();
            list.appendChild(el);
            el.addEventListener('click', () => {
                _projectManager.setFocusedProject(project);
                console.log(_projectManager.getFocusedProject());
            });
        });
    }

// ----------------------------------------------------------------------
    /**
     * Appends an element to another
     * @param {HTMLElement} parent 
     * @param {HTMLElement} child 
     */
    const appendTo = (parent, child) => {
        parent.appendChild(child);
    }


// ----------------------------------------------------------------------
    /**
     * Clears an HTML Element of all it contains
     * @param {HTMLElement} element 
     */
    const clearElement = (element) => {
        element.innerHTML = '';
    }

// ----------------------------------------------------------------------

    const showProjectForm = () => {
        _formContainer.classList.remove('hidden');
        _container.classList.add('blur');
    }

// ----------------------------------------------------------------------

    const hideProjectForm = () => {
        _formContainer.classList.add('hidden');
        _container.classList.remove('blur');
    }

// ----------------------------------------------------------------------

    const errProjectForm = (mes) => {
        document.querySelector('.project-error').innerText = mes;
    }





// ----------------------------------------------------------------------
// GETTERS SETTERS ETC...
    const getBody = () => _body;

// Return 
    return {
        createTaskCard,
        refreshSidebar,
        clearElement,
        appendTo,
        showProjectForm,
        hideProjectForm,
        errProjectForm, 
        getBody,
    };
}

export default createUserInterfaceManager;