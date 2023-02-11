const createTask = (title, description, dueDate, priority, checkList, isDue = false ,isDone = false) => {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;
    let _checkList = checkList;
    let _isDue = isDue;  // Not sure if it belongs here
    let _isDone = isDone;

    const logTask = () => {
        console.log(`
        Title : ${_title}
        Description : ${_description}
        Due Date : ${_dueDate}
        Priority : ${_priority}
        CheckList : ${_checkList}
        isDone : ${_isDone}
        `);
    };

    const getTitle = () => _title;
    const getDescription = () => _description;
    const getDueDate = () => _dueDate;
    const getPriority = () => _priority;
    const getIsDue = () => _isDue;
    const getIsDone = () => _isDone;

    const getTimeLeft = () => {
        const now = new Date().getTime();
        const dueTime = _dueDate.getTime();
        const timeLeft = dueTime - now;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 *24));
        const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        return ({days, hours});
    }


    // Change the done status of task
    const setIsDone = () => _isDone = !_isDone;

    return {
        logTask, 
        getTimeLeft, 
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        getIsDue,
        getIsDone,
        setIsDone
    };
}

export default createTask;