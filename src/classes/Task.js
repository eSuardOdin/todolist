const createTask = (title, description, dueDate, priority, checkList, isDone = false) => {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;
    let _checkList = checkList;
    let _isDone = isDone;

    const printTask = () => {
        console.log(`
        Title : ${_title}
        Description : ${_description}
        Due Date : ${_dueDate}
        Priority : ${_priority}
        CheckList : ${_checkList}
        isDone : ${_isDone}
        `);
    }
    return {printTask};
}

export default createTask;