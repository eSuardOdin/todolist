import data from "../data";
import createTask from "./Task";
import createProject from "./Project";
import createProjectMan from "./ProjectManager";
import createUI from "./UI";

const createInterfacer = () => {

    const _PM = createProjectMan();
    const _defaultProject = createProject('Default');
    _defaultProject.addTask(data.task1);
    _defaultProject.addTask(data.task2);
    _defaultProject.addTask(data.task3);
    _defaultProject.addTask(data.task4);
 
    _PM.addProject(_defaultProject);


    const _UI = createUI(document.body);

    const pForm = document.querySelector('.project-form-btn');
    const pValid = document.querySelector('.create-project-btn');
    const pCancel = document.querySelector('.cancel-project-btn');

    const tForm = document.querySelector('.task-form-btn');
    const tValid = document.querySelector('.create-task-btn');
    const tCancel = document.querySelector('.cancel-task-btn');

    const extendedList = [];

    // Get the index of an HTML element (task or project)
    const getId = (element) => element.getAttribute('id').substring(1);


   

    // Refresh tasks for a project
    const interfacerRefreshMain = (pm, ind) => {
        _UI.refreshMain(pm, ind, extendedList);
        
        // Delete old tasks ?
        // #region
        // -------------------------------------------------------------------
        // o----------------------------------------------------------------o
        // |  Removed to go in UI.refreshMain, uncomment if not working     |
        // o----------------------------------------------------------------o  
        // // In order to iterate trough all focusedProject.tasks
        // let index = 0;
        // const focusedProject = pm.getSingleProject(pm.getFocusedProject());
        
        // focusedProject.getAllTasks().forEach(task => {
        //     const taskElement = _UI.printTask(task, index);
        //     container.appendChild(taskElement);
        //     index ++;
        // })
        // -------------------------------------------------------------------
        // #endregion




        // -----------------------------------------------
        // EVENTS FOR DELETE BTN
        const deleteBtns = document.querySelectorAll('.icon-delete-task');
        deleteBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.parentElement.getAttribute('id').substring(1);
                deleteTask(id, _PM.getSingleProject(_PM.getFocusedProject()));
            });
        });




        // -----------------------------------------------
        // EVENTS FOR CLEAR BTN
        const clearBtns = document.querySelectorAll('.icon-clear-task');
        clearBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.parentElement.getAttribute('id').substring(1);
                const task = _PM.getSingleProject(_PM.getFocusedProject()).getTask(id);
                clearTask(task);
            })
        });

        
        



        // -----------------------------------------------
        // EVENTS FOR EXTEND BTN
        const extendBtns = document.querySelectorAll('.icon-extends-task');
        extendBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                let taskElmt = btn.parentElement;
                const id = taskElmt.getAttribute('id').substring(1);
                const task = _PM.getSingleProject(_PM.getFocusedProject()).getTask(id);
                let container = document.querySelector('.main-tasks-container');

                // console.log(extendedList.indexOf(id));
                if(extendedList.indexOf(id) === -1) {
                    extendedList.push(id);
                    container = _UI.printExtendedTask(task, id);

                    console.log(container.parentElement);
                } else {
                    extendedList.splice(extendedList.indexOf(id), 1);
                    container = _UI.printTask(task, id);
                    console.log(container.parentElement);
                }
                console.log(extendedList);
                _UI.toggleExtended(taskElmt);
            })
        })
        // Event to show task form
        tForm.addEventListener('click', () => {
            _UI.print(document.querySelector('.task-error'), '');
            _UI.showForm('task');
            document.querySelector('.base-page-container').classList.add('unclickable');
        });

         
        tCancel.addEventListener('click', () => {
            _UI.hideForm('task');
            document.querySelector('.base-page-container').classList.remove('unclickable');
        });
    }

    // Toggle task.isDone
    const clearTask = (task) => {
        task.setIsDone();
        task.logTask();
        interfacerRefreshMain(_PM, _PM.getFocusedProject());
    };

    // Delete task from project and UI
    const deleteTask = (taskId, project) => {
        project.removeTask(taskId);
        interfacerRefreshMain(_PM, _PM.getFocusedProject());
    };

    
    /**
     * Add event listener on each sidebar project.
     */
    const refreshProjectsEvent = () => {
        _UI.refreshSidebar(_PM.getProjects());
        const projectsNode = document.querySelectorAll('.side-project');

        projectsNode.forEach(project => {
            // Get index of the project
            const projectID = getId(project);
            project.addEventListener('click', () => {
                _PM.setFocusedProject(projectID);
                interfacerRefreshMain(_PM, projectID);
                console.log(`focused project is ${_PM.getSingleProject(_PM.getFocusedProject()).getName()}`);

            });
        })
    }




    // Init basic layout
    refreshProjectsEvent();
    interfacerRefreshMain(_PM, 0);

    //   O-------------------------O 
    //   |     PROJECT EVENTS      |
    //   O-------------------------O
     
    // On "Add project" btn click
    // Show project form and disable btns (add all relevant btns to disable)

    pForm.addEventListener('click', () => {
        // reset input and error msg
        document.querySelector('#project-name').value = '';
        _UI.print(document.querySelector('.project-error'), '');
        _UI.showForm('project');
        document.querySelector('.base-page-container').classList.add('unclickable');
    });

    // Button to add a project
    // Checks if it already exists
    pValid.addEventListener('click', () => {
        let isAlreadyExists = false;
        const inputName = document.querySelector('#project-name').value;
        _PM.getProjects().forEach(project => {
            if (inputName === project.getName()) {
                isAlreadyExists = true;
            }
        });
        if (isAlreadyExists) {
            _UI.print(document.querySelector('.project-error'), 'This project already exists');
        }
        else {
            _UI.hideForm('project');
            const newProj = createProject(inputName);
            _PM.addProject(newProj);
            refreshProjectsEvent();
            _UI.hideForm('project');
            document.querySelector('.base-page-container').classList.remove('unclickable');
        }
    });

    // Button to cancel addProject
    pCancel.addEventListener('click', () => {
        _UI.hideForm('project');
        document.querySelector('.base-page-container').classList.remove('unclickable');
    })




    //   O----------------------O 
    //   |     TASK EVENTS      |
    //   O----------------------O


    // Check if a task is valid
    const isTaskValid = () => {
        const title = document.getElementById('task-title').value;
        const dueDate = new Date(document.getElementById('task-due-date').value);

        // Check if date is ok
        const now = new Date().getTime();
        if (now > dueDate.getTime()) {
            return {valid: false, err: 'Date error'};
        }

        // Check if task name already existing in this project
        let isAlreadyExists = false;
        const inputName = document.querySelector('#task-title').value;
        _PM.getSingleProject(_PM.getFocusedProject()).getAllTasks().forEach(task => {
            if (inputName === task.getTitle()) {
                isAlreadyExists = true;
            }
        });
        if(isAlreadyExists) {
            return {valid: false, err: 'Name error'};
        }
        return {valid: true, err:''};
    };


       
    // ---------------------------------//
    // ---------------------------------//
    //            Add task              //
    // ---------------------------------//
    // ---------------------------------//
    tValid.addEventListener('click', () => {
        console.log(isTaskValid());
        if(isTaskValid().valid) {
            const title = document.getElementById('task-title').value;
            const description = document.getElementById('task-description').value;
            const dueDate = new Date(document.getElementById('task-due-date').value);
            const priority = Number(document.getElementById('task-priority').value);
            const newTask = createTask(title, description, dueDate, priority, null);
            _PM.getSingleProject(_PM.getFocusedProject()).addTask(newTask);
            
            // ------------------------------
            // DEBUG
            console.log(`${_PM.getSingleProject(_PM.getFocusedProject()).getName()} tasks : `);
            _PM.getSingleProject(_PM.getFocusedProject()).getAllTasks().forEach(task => {console.log(task.getTitle())});
            // ------------------------------

            interfacerRefreshMain(_PM, _PM.getFocusedProject());
            _UI.hideForm('task');
            _UI.resetTaskForm(document.querySelector('.task-form'));
            document.querySelector('.base-page-container').classList.remove('unclickable');
            
        } else {
            _UI.print(document.querySelector('.task-error'), isTaskValid().err);
        }

       
    });


    tCancel.addEventListener('click', () => {
        _UI.hideForm('task');
        document.querySelector('.base-page-container').classList.remove('unclickable');
        _UI.resetTaskForm(document.querySelector('.task-form'));
    });



    return {};
}


export default createInterfacer;