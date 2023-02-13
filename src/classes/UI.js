const resetTaskForm = (element) => {
    element.reset();
}
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

    const refreshMain = (projectManager, index, extendedTasks, filter = 'all') => {
        _dynamicMain.innerHTML = `
        <h1 class="main-project-title"></h1>
        <div class="task-sort-container">
            <label for="task-sort">Sort tasks : </label>
            <select required name="task-sort" id="task-sort">

                <option value="" selected></option>

                <option value ="prio-asc">By priority (asc.)</option>
                <option value="prio-desc">By priority (desc.)</option>

                <option value ="due-date-asc">By due date (asc.)</option>
                <option value="due-date-desc">By due date (desc.)</option>
            </select>

            <button class="sort-btn">Sort</button>
        </div>
        <div class="task-filter-container">
            <label for="task-filter">Show : </label>
            <select required name="task-filter" id="task-filter">

                <option value="all" selected>All</option>

                <option value ="done">Done</option>
                <option value="due">Due</option>
            </select>

            <button class="filter-btn">Filter</button>
        </div>
        <div class="main-tasks-container"></div>
        `;
        const container = document.querySelector('.main-tasks-container');
        const projectTitle = projectManager.getSingleProject(index).getName();
        const title = document.querySelector('.main-project-title');
        title.innerText = projectTitle;

        const focusedProject = projectManager.getSingleProject(projectManager.getFocusedProject());


        let indexTask = 0;
        focusedProject.getAllTasks().forEach(task => {
            if(filter === 'all' ||
            (filter === 'done' && task.getIsDone()) ||
            (filter === 'due' && !task.getIsDone())    
            ) {
            let taskElement;

            if(extendedTasks.indexOf(indexTask) === -1) { // If element not extend
                taskElement = printTask(task, indexTask);
                taskElement.classList.remove('extended');
            }
            else {
                taskElement = printExtendedTask(task, indexTask);
                taskElement.classList.add('extended');
            }
            container.appendChild(taskElement);

            }
            indexTask ++;
        })
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

        if(task.getIsDone()) {
            container.classList.remove('task-container');
            container.classList.add('task-container-done');
        }
        else {
            container.classList.add('task-container');
        }
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
        titleTask.innerText = title;
        
        const priorityTask = document.createElement('p');
        priorityTask.classList.add('priority-task');
        priorityTask.innerText = prio;
        
        const dateTask = document.createElement('p');
        
        
        const iconClearTask = document.createElement('p');
        if(task.getIsDone()){
            iconClearTask.innerText = 'Task Cleared !';
        }
        else {
            iconClearTask.innerText = 'Clear';
            dateTask.innerText = `Until the ${month}/${day}/${year}`;
            iconClearTask.classList.add('icon-clear-task');
        }
        
        const iconDeleteTask = document.createElement('p');
        iconDeleteTask.innerText = 'Delete';
        
        const iconExtendsTask = document.createElement('p');
        iconExtendsTask.innerText = 'V';
        
        
        titleTask.classList.add('title-task');
        dateTask.classList.add('date-task');
        
        iconExtendsTask.classList.add('icon-extends-task');
        iconDeleteTask.classList.add('icon-delete-task');
        



        container.appendChild(titleTask);
        container.appendChild(priorityTask);
        container.appendChild(dateTask);
        container.appendChild(iconClearTask);
        container.appendChild(iconDeleteTask);
        container.appendChild(iconExtendsTask);
        
        
        return container;
    }

    const printExtendedTask = (task, index) => {
        // Debug
        const container = document.createElement('div');
        if(task.getIsDone()) {
            container.classList.remove('task-container');
            container.classList.add('task-container-done');
        }
        else {
            container.classList.add('task-container');
        }
        container.setAttribute('id', `t${index}`)
        // Elements
        const title = document.createElement('p');
        let prio = document.createElement('p');
        const dueDate = document.createElement('p');
        const description = document.createElement('p');
        const timeLeft = document.createElement('p');
        const clearBtn = document.createElement('p');
        const delBtn = document.createElement('p');
        const collapseBtn = document.createElement('p');


        // Classes
        title.classList.add('task-ext-title');
        prio.classList.add('task-ext-prio');
        dueDate.classList.add('task-ext-dueDate');
        description.classList.add('task-ext-description');
        timeLeft.classList.add('task-ext-timeleft');
        // Clear button gets two classes
        if(!task.getIsDone()){
            clearBtn.classList.add('icon-clear-task');
        }
        clearBtn.classList.add('task-ext-clear-btn');
        // Del button gets two classes
        delBtn.classList.add('icon-delete-task');
        delBtn.classList.add('task-ext-del-btn');
        // Extend button gets two classes
        collapseBtn.classList.add('task-ext-collapse-btn');
        collapseBtn.classList.add('icon-extends-task');

        title.textContent = task.getTitle();
        switch (Number(task.getPriority())) {
            case 1:
                prio.textContent = "Higher";
                break;
            case 2:
                prio.textContent = "High";
                break;
            case 3:
                prio.textContent = "Medium";
                break;
            case 4:
                prio.textContent = "Low";
                break;
            default:
                prio.textContent = "Lower"
                break;
        };
        const month = task.getDueDate().getMonth()+1;
        const day = task.getDueDate().getDate();
        const year = task.getDueDate().getFullYear();
        dueDate.innerText = `Until the ${month}/${day}/${year}`;
        timeLeft.innerText = `${task.getTimeLeft().days} days and ${task.getTimeLeft().hours} hours left`
        description.innerText = task.getDescription();
        clearBtn.innerText = (task.getIsDone()) ? 'Task Cleared !' : 'Clear';
        delBtn.innerText = 'Delete';
        collapseBtn.innerText = '^';

        container.appendChild(title);
        container.appendChild(prio);
        container.appendChild(dueDate);
        container.appendChild(description);
        container.appendChild(timeLeft);
        container.appendChild(clearBtn);
        container.appendChild(delBtn);
        container.appendChild(collapseBtn);

        return container;
    } 

    const toggleExtended = (taskElmt) => {
        taskElmt.classList.toggle('extended');
    }
    const getTaskForm = () => _taskFormContainer;
    return{
        refreshSidebar, 
        refreshMain,
        showForm,
        hideForm,
        print,
        printTask,
        printExtendedTask,
        resetTaskForm,
    }
};

export default createUI;
