//  categories
const addNewCategory=document.querySelector(".addNewCategory")
const saveProjects=document.querySelector(".save-project")
const projectName=document.querySelector("#project-name")
const projectDescription=document.querySelector("#project-description")
const categories=document.querySelector(".categories")
const newProjectM=document.querySelector(".projects-modal-none")




// tasks
const addNewTask=document.querySelector(".addNewTask")
const saveTasks=document.querySelector(".save-task")
const newTaskM=document.querySelector(".tasks-modal-none")
const taskName=document.querySelector("#task-title")
const taskDescription=document.querySelector("#task-description")
const dueDate=document.querySelector("#task-date")
const tasks=document.querySelector(".tasks")



addNewCategory.addEventListener("click",()=>{
    newProjectM.classList.add("flex")
})

saveProjects.addEventListener("click",()=>{
    const newCategoryTitle=document.createElement("summary")
    newCategoryTitle.classList.add("project-title")
    newCategoryTitle.textContent=projectName.value
    newCategoryTitle.setAttribute("title",projectDescription.value)

    const newCategory=document.createElement("details")
    newCategory.classList.add("project")
    newCategory.append(newCategoryTitle)

    categories.insertBefore(newCategory,addNewCategory)
    newProjectM.classList.remove("flex")
})

addNewTask.addEventListener("click",()=>{
    newTaskM.classList.add("flex")
})

saveTasks.addEventListener("click",()=>{
    const taskInfo=document.createElement("h4")
    taskInfo.textContent=taskName.value
    taskInfo.classList.add("task")

    tasks.insertBefore(taskInfo,addNewTask)
    newTaskM.classList.remove("flex")

})