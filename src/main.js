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