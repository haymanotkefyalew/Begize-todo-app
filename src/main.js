let projects = [];
let currentView = 'all'
let selectedTaskId = null;

function setupEventListeners(){
    document.querySelector('.addNewCategory').addEventListener('click', () => openModal('projects'));
    document.querySelector('.cancel-pmodal').addEventListener('click', closeModals);
    document.querySelector('.save-project').addEventListener('click', addProject); 

    document.querySelector('.cancel-tmodal').addEventListener('click', closeModals);
    document.querySelector('.save-task').addEventListener('click', addTask);
}