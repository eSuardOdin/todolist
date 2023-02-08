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
    
    const _dynamicMain = document.createElement('div');
    _dynamicMain.innerHTML = `
    <h1 class="main-project-title"></h1>
    <div class="main-tasks-container"></div>
    `;
    const _taskButton = document.createElement('button');
    _taskButton.classList.add("task-form-btn");
    _taskButton.innerText = "Add a task";
    _main.appendChild(_dynamicMain);
    _main.appendChild(_taskButton);
    _main.classList.add('main');
    const _footer = document.createElement('div');
    _footer.classList.add('footer');

    // Creating hidden elements (need to add task form)
    const _projectFormContainer = document.createElement('div');
        _projectFormContainer.classList.add('form-container');
        _projectFormContainer.classList.add('hidden');

        _projectFormContainer.innerHTML = `
        <p class="form-title">Create a new project : </p>
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

// ---------------------
    // Task form :
    const _taskFormContainer = document.createElement('div');
    _taskFormContainer.classList.add('form-container');
    _taskFormContainer.classList.add('hidden');
    _taskFormContainer.innerHTML = `
    <p class="form-title">Create a task</p>
    <form class="task-form" action="#">
    <div>
        <label for="task-title">Task title : </label>
        <input required type="text" name="task-title" id="task-title">
    </div>

    <div>
        <label for="task-description">Description : </label>
        <textarea id="task-description" name="task-description" rows="3" cols="30"></textarea>
    </div>

    <div>
        <label for="task-due-date">Due date : </label>
        <input required id="task-due-date" name="task-due-date" type="date"></input>
    </div>

    <div>
        <label for="task-priority">Priority : </label>
        <select required name="task-priority" id="task-priority">
            <option value="1">Higher</option>
            <option value="2">High</option>
            <option selected value="3">Medium</option>
            <option value="4">Low</option>
            <option value="5">Lower</option>
        </select>
    </div>
    </form>

    <p class="task-error"></p>
    <div>
        <button class="create-task-btn">Create Task</button>
        <button class="cancel-task-btn">Cancel</button>
    </div>
    `;
// -----------------------
    
    _container.appendChild(_header);
    _container.appendChild(_sidebar);
    _container.appendChild(_main);
    _container.appendChild(_footer);
    
    _body.appendChild(_container);
    _body.appendChild(_projectFormContainer);
    _body.appendChild(_taskFormContainer);
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
        _dynamicMain.innerHTML = `
        <h1 class="main-project-title"></h1>
        <div class="main-tasks-container"></div>
        `;
        const projectTitle = projectManager.getSingleProject(index).getName();
        const title = document.querySelector('.main-project-title');
        title.innerText = projectTitle;
    };

    const showForm = (type) => {
        if(type === 'project') {
            _projectFormContainer.classList.remove('hidden');
            _container.classList.add('blur'); 
        } else if (type === 'task') {
            _taskFormContainer.classList.remove('hidden');
            _container.classList.add('blur');  
        }
    }; 

    const hideForm = (type) => {
        if(type === 'project') {
            _projectFormContainer.classList.add('hidden');
            _container.classList.remove('blur'); 
        } else if (type === 'task') {
            _taskFormContainer.classList.add('hidden');
            _container.classList.remove('blur');  
        }
    }; 

    const print = (element, value) => {
        element.innerText = value;
    }

    const printTask = (task, index) => {
        const container = document.createElement('div');
        container.classList.add('task-container');
        container.setAttribute('id', `t${index}`)
        const title = task.getTitle();
        let prio;
        switch (Number(task.getPriority())) {
            case 1:
                prio = "Higher";
                break;
            case 2:
                prio = "High";
                break;
            case 3:
                prio = "Medium";
                break;
            case 4:
                prio = "Low";
                break;
            default:
                prio = "Lower"
                break;
        }
        const month = task.getDueDate().getMonth()+1;
        const day = task.getDueDate().getDate();
        const year = task.getDueDate().getFullYear();

        const titleTask = document.createElement('p');
        titleTask.classList.add('title-task');
        titleTask.innerText = title;

        const priorityTask = document.createElement('p');
        priorityTask.classList.add('priority-task');
        priorityTask.innerText = prio;

        const dateTask = document.createElement('p');
        dateTask.classList.add('date-task');
        dateTask.innerText = `Until the ${month}/${day}/${year}`;

        const iconTask = document.createElement('p');
        iconTask.classList.add('icon-task');
        iconTask.innerText = 'X / O';

        container.appendChild(titleTask);
        container.appendChild(priorityTask);
        container.appendChild(dateTask);
        container.appendChild(iconTask);
        
        return container;
    }
    return{
        refreshSidebar, 
        refreshMain,
        showForm,
        hideForm,
        print,
        printTask
    }
};

export default createUI;
