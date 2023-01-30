const createUserInterfaceManager = (body) => {
    const _body = body;
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



        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(preFooter);
        return container;
    }

    return {createTaskCard};
}

export default createUserInterfaceManager;