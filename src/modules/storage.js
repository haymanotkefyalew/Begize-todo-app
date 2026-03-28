export function getProjectsStored(){
    const data = localStorage.getItem("project");
    return data ? JSON.parse(data) : [];
}

export function saveProjects(projects){
    localStorage.setItem("project", JSON.stringify(projects));
}