//  categories
const addNewCategory=document.querySelector(".addNewCategory")
const saveProjects=document.querySelector(".save-project")
const categories=document.querySelector(".categories")
const newProjectM=document.querySelector(".projects-modal")
const cancelPModal=document.querySelector(".cancel-pmodal")


// other
const backDrop=document.querySelector("#overlay")

// tasks
const addNewTask=document.querySelector(".addNewTask")
const saveTasks=document.querySelector(".save-task")
const newTaskM=document.querySelector(".tasks-modal")
const taskName=document.querySelector("#task-title")
const taskDescription=document.querySelector("#task-description")
const dueDate=document.querySelector("#task-date")
const dueDateC=document.querySelector(".task-date")
const taskRepetition=document.querySelector(".task-repetition")
const tasks=document.querySelector(".tasks")
const cancelTModal=document.querySelector(".cancel-tmodal")

console.log(taskRepetition.value)
taskRepetition.addEventListener("change",(event)=>{
    const selectedValue=event.target.value
                if(selectedValue=="daily"){
                dueDateC.innerHTML=``
            }else if(selectedValue=="onetime"){
                dueDateC.innerHTML=`
                <label>Due Date</label> <br/> 
                <input type="date" id="task-date" />
                `
            }else if(selectedValue=="monthly"){
                dueDateC.innerHTML=`
                <label>Monthly</label> <br/> 
                <input type="date" id="task-date" />
                `
            }else{
                dueDateC.innerHTML=`
                <label for="weekday_select">Select a day:</label>
                <br/>
<select id="weekday_select" name="weekday">
  <option value="Monday">Monday</option>
  <option value="Tuesday">Tuesday</option>
  <option value="Wednesday">Wednesday</option>
  <option value="Thursday">Thursday</option>
  <option value="Friday">Friday</option>
  <option value="Saturday">Saturday</option>
  <option value="Sunday">Sunday</option>
</select>

                `
            }

})


// projects

let projects=[];

cancelPModal.addEventListener("click",()=>{
    backDrop.classList.add("hidden")
    newProjectM.classList.add("hidden")
})
cancelTModal.addEventListener("click",()=>{
    backDrop.classList.add("hidden")
    newTaskM.classList.add("hidden")
})
addNewCategory.addEventListener("click",()=>{
    backDrop.classList.remove("hidden")
    newProjectM.classList.remove("hidden")
})

saveProjects.addEventListener("click",()=>{
    createProject();
    backDrop.classList.add("hidden")
    newTaskM.classList.add("hidden")
    
})

addNewTask.addEventListener("click",()=>{
    backDrop.classList.remove("hidden")
    newTaskM.classList.remove("hidden")
})

saveTasks.addEventListener("click",()=>{
    

})

function createProject(){
    const projectName=document.querySelector("#project-name").value
    const projectDescription=document.querySelector("#project-description").value
    const newProject={id:Date.now(),projectName,projectDescription}
    projects.push(newProject)
}

function closeModal(){
    backDrop.classList.add("hidden")
    newTaskM.classList.add("hidden")
    newProjectM.classList.add("hidden")
}