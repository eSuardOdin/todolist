/**
 * The project creator module
 */
const createProject = (name) => {

    // Name of the project and it's array of tasks
    const _tasks = [];
    const _name = name;
    
    // Return Project's name
    const getName = () => _name;

    // Add a task in array
    const addTask = (task) => {
        _tasks.push(task);
    };

    // Remove a task from array with it's index
    const removeTask = (index) => {
        if(_tasks.length > index) {
            _tasks.splice(index, 1);
        } else {
            console.error('Error, the task is not in this project');
        }
    };

    // Return a specific task
    const getTask = (index) => {
        if(_tasks.length >= index) {
            return _tasks[index];
        } else {
            console.error(`Error : Cannot get task at index ${index}`);
        }
    }

    // Return all tasks (only for dev / debug I think)
    const getAllTasks = () => _tasks;
    return {getName, addTask, removeTask, getTask, getAllTasks};
};


export default createProject;