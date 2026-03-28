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
    closeModals();
    render();
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
    closeModals();
    render();
}

function toggleTask(projId, taskId) {
    const project = projects.find(p => p.id === projId);
    const task = project.tasks.find(t => t.id === taskId);
    task.completed = !task.completed;
    render();
}

function deleteTask(projId, taskId) {
    const project = projects.find(p => p.id === projId);
    project.tasks = project.tasks.filter(t => t.id !== taskId);
    selectedTaskId = null;
    render();
}

function render() {
    renderSidebar();
    renderMain();
    renderDetails();
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

function renderDetails() {
    const panel = document.getElementById('detail-panel');
    if (!selectedTaskId) {
        panel.innerHTML = '<div class="placeholder">Select a task for details</div>';
        return;
    }

    let foundTask, foundProj;
    projects.forEach(p => {
        const t = p.tasks.find(tk => tk.id === selectedTaskId);
        if(t) { foundTask = t; foundProj = p; }
    });

    if(!foundTask) return;

    panel.innerHTML = `
        <h3>${foundTask.title}</h3>
        <p style="margin: 15px 0; color: #666">${foundTask.desc || 'No description'}</p>
        <hr><br>
        <p><strong>Project:</strong> ${foundProj.name}</p>
        <p><strong>Due:</strong> ${foundTask.date || 'Not set'}</p>
        <p><strong>Recurrence:</strong> ${foundTask.recurrence}</p>
        <br>
        <button style="color:red; border:1px solid red; background:none; padding:5px; cursor:pointer" 
                onclick="deleteTask(${foundProj.id}, ${foundTask.id})">Delete Task</button>
    `;
}


function setView(v) { 
    currentView = v; 
    selectedTaskId = null;
    render(); 
}

function selectTask(id) { 
    selectedTaskId = id; 
    render(); 
}

function openModal(type) {
    document.getElementById('overlay').classList.remove('hidden');
    document.querySelector(`.${type}-modal`).classList.remove('hidden');
}

function closeModals() {
    document.getElementById('overlay').classList.add('hidden');
    document.querySelectorAll('.projects-modal, .tasks-modal').forEach(el => el.classList.add('hidden'));
}