const addNewCategory=document.querySelector(".addNewCategory")
const saveProjects=document.querySelector(".save-project")
const projectName=document.querySelector("#project-name")
const categories=document.querySelector(".categories")
const newProjectM=document.querySelector(".projects-modal-none")

addNewCategory.addEventListener("click",()=>{
    newProjectM.classList.add("flex")
})

saveProjects.addEventListener("click",()=>{
    const newCategory=document.createElement("h4")
    newCategory.textContent=projectName.value
    categories.insertBefore(newCategory,addNewCategory)
    newProjectM.classList.remove("flex")
})