let tasks = [
    {id: 1, description: 'Salir hacer el mercado', completed: false},
    {id: 2, description: 'Estudiar para la prueba', completed: false},
    {id: 3, description: 'Sacar a pasear a Tobby', completed: true}
];

const renderTasks = () => {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.innerHTML = `
            <span>${task.id}</span>
            <span>${task.description}</span>
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})">
            <button onclick="deleteTask(${index})">Eliminar</button>
        `;
        taskList.appendChild(taskItem);
    });

    updateTaskSummary();
};

const updateTaskSummary = () => {
    const totalTasks = document.getElementById('totalTasks');
    const completedTasks = document.getElementById('completedTasks');

    totalTasks.innerText = tasks.length;
    completedTasks.innerText = tasks.filter(task => task.completed).length;
};

const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const newTask = {
        id: tasks.length + 1,
        description: taskInput.value,
        completed: false
    };
    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};

const toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};

renderTasks();
