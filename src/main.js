let projects = [];
let currentView = 'all'
let selectedTaskId = null;

function setupEventListeners(){
    document.querySelector('.addNewCategory').addEventListener('click', () => openModal('projects'));
    document.querySelector('.cancel-pmodal').addEventListener('click', closeModals);
    document.querySelector('.save-project').addEventListener('click', addProject); 

    document.querySelector('.cancel-tmodal').addEventListener('click', closeModals);
    document.querySelector('.save-task').addEventListener('click', addTask);

    const activityBtns = document.querySelectorAll('.activities button');
    activityBtns[0].addEventListener('click', () => setView('all'));
    activityBtns[1].addEventListener('click', () => setView('pending'));
    activityBtns[2].addEventListener('click', () => setView('completed'));
}


function addProject(){
    const nameInput = document.getElementById('project-name');
    const descInput = document.getElementById('project-description');
    
    if (!nameInput.value) return alert("Enter a project name");

    const newProj = { 
        id: Date.now(), 
        name: nameInput.value, 
        description: descInput.value, 
        tasks: [] 
    };

    projects.push(newProj);
    nameInput.value = '';
    descInput.value = '';
}

function addTask() {
    const title = document.getElementById('task-title').value;
    if (!title) return alert("Enter a task title");
    if (!currentView.startsWith('project-')) return alert("Select a project category first");

    const projectId = parseInt(currentView.split('-')[1]);
    const project = projects.find(p => p.id === projectId);

    const newTask = {
        id: Date.now(),
        title: title,
        desc: document.getElementById('task-description').value,
        date: document.getElementById('task-date').value,
        recurrence: document.getElementById('task-repetition').value,
        priority: 'normal',
        completed: false
    };
    project.tasks.push(newTask);
}

function toggleTask(projId, taskId) {
    const project = projects.find(p => p.id === projId);
    const task = project.tasks.find(t => t.id === taskId);
    task.completed = !task.completed;
}

function deleteTask(projId, taskId) {
    const project = projects.find(p => p.id === projId);
    project.tasks = project.tasks.filter(t => t.id !== taskId);
    selectedTaskId = null;
}

function renderSidebar() {
    const container = document.querySelector('.categories-list');
    container.innerHTML = projects.map(p => `
        <button class="${currentView === 'project-' + p.id ? 'active-nav' : ''}" 
                onclick="setView('project-${p.id}')">
            📂 ${p.name}
        </button>
    `).join('');
}

function renderMain() {
    const header = document.getElementById('view-header');
    const list = document.getElementById('task-items');
    let tasksToShow = [];
    let viewTitle = "";

    if (currentView.startsWith('project-')) {
        const id = parseInt(currentView.split('-')[1]);
        const p = projects.find(proj => proj.id === id);
        viewTitle = p ? p.name : "Unknown";
        if(p) tasksToShow = p.tasks.map(t => ({...t, projId: p.id}));
    } else {
        viewTitle = currentView.toUpperCase();
        projects.forEach(p => {
            p.tasks.forEach(t => {
                if (currentView === 'all') tasksToShow.push({...t, projId: p.id});
                else if (currentView === 'pending' && !t.completed) tasksToShow.push({...t, projId: p.id});
                else if (currentView === 'completed' && t.completed) tasksToShow.push({...t, projId: p.id});
            });
        });
    }

    header.innerHTML = `
        <h2>${viewTitle}</h2> 
        ${currentView.startsWith('project-') ? '<button onclick="openModal(\'tasks\')">+ New Task</button>' : ''}
    `;
    
    list.innerHTML = tasksToShow.map(t => `
        <div class="task-card ${t.completed ? 'completed' : ''}" onclick="selectTask(${t.id})">
            <input type="checkbox" ${t.completed ? 'checked' : ''} 
                   onclick="event.stopPropagation(); toggleTask(${t.projId}, ${t.id})">
            <div style="flex:1">
                <strong>${t.title}</strong><br>
                <small>${t.recurrence !== 'onetime' ? '🔁 ' + t.recurrence : t.date}</small>
            </div>
        </div>
    `).join('');
}