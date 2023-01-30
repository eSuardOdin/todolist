const createTask = (title, description, dueDate, priority, checkList, isDue = false ,isDone = false) => {
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority = priority;
    let _checkList = checkList;
    let _isDue = isDue;
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

    const getTimeLeft = () => {
        const now = new Date().getTime();
        const dueTime = _dueDate.getTime();
        const timeLeft = dueTime - now;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 *24));
        const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const min = Math.floor(timeLeft % (1000 * 60 * 60) /( 1000 * 60) );
        return (`${days} Days, ${hours} Hours and ${min} Minutes left`);
    }



    return {printTask, getTimeLeft};
}

export default createTask;