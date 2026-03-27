const addNewCategory=document.querySelector(".addNewCategory")
const saveProjects=document.querySelector(".save-project")
const projectName=document.querySelector("#project-name")
const projectDescription=document.querySelector("#project-description")
const categories=document.querySelector(".categories")
const newProjectM=document.querySelector(".projects-modal-none")

addNewCategory.addEventListener("click",()=>{
    newProjectM.classList.add("flex")
})

saveProjects.addEventListener("click",()=>{
    const newCategoryTitle=document.createElement("summary")
    newCategoryTitle.classList.add("project-title")
    newCategoryTitle.textContent=projectName.value
    const newCategoryDesc=document.createElement("p")
    newCategoryDesc.classList.add("project-desc")
    newCategoryDesc.textContent=projectDescription.value

    const newCategory=document.createElement("details")
    newCategory.classList.add("project")
    newCategory.append(newCategoryTitle,newCategoryDesc)

    categories.insertBefore(newCategory,addNewCategory)
    newProjectM.classList.remove("flex")
})