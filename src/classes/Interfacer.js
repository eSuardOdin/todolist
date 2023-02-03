import data from "../data";
import createTask from "./Task";
import createProject from "./Project";
import createProjectMan from "./ProjectManager";
import createUI from "./UI";

const createInterfacer = () => {

    const _PM = createProjectMan();
    const _defaultProject = createProject('Default');
    _PM.addProject(_defaultProject);
    

    const _UI = createUI(document.body);
    _UI.refreshSidebar(_PM.getProjects());

    const pForm = document.querySelector('.project-form-btn');
    const pValid = document.querySelector('.create-project-btn');
    const pCancel = document.querySelector('.cancel-project-btn');

    const tForm = 'To implement'; 
    const tValid = 'To implement';
    const tCancel = 'To implement';

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
            if(inputName === project.getName()) {
                isAlreadyExists = true;
            }
        });
        if(isAlreadyExists){
            _UI.print(document.querySelector('.project-error'), 'This project already exists');
        }
        else {
            _UI.hideForm('project');
            const newProj = createProject(inputName);
            _PM.addProject(newProj);
            _UI.refreshSidebar(_PM.getProjects());
            _UI.hideForm('project');
            document.querySelector('.base-page-container').classList.remove('unclickable');
        }
    });

    // Button to cancel addProject
    pCancel.addEventListener('click', () => {
        _UI.hideForm('project');
        document.querySelector('.base-page-container').classList.remove('unclickable');
    })

    return{};
}


export default createInterfacer;