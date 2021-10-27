// matching function names in projects/projectName.js
const khanProjects = {
  findTheTreasure
}

function renderDropdown() {
  const dropdownElem = document.getElementById('dropdown');
  dropdownElem.innerHTML = '';

  Object.keys(khanProjects).forEach((key) => {
    const project = khanProjects[key];

    var option = document.createElement("option");
    option.text = project.PROJECT_NAME;
    dropdownElem.add(option);
  });
}
renderDropdown(khanProjects);

function switchProject(e) {
  const projectName = e.target.value;
  chooseProject(khanProjects[projectName])
}

function chooseProject(project) {
  if (project && project.main) {
    rerenderPage(project);
    createProcessing(project.main);
  } else {
    alert("Project not found")
  }
}

chooseProject(Object.values(khanProjects)[0])

