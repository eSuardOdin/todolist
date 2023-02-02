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
    return{};
}


export default createInterfacer;