// matching function names in projects/projectName.js
const khanProjects = {
  findTheTreasure,
  twoByRubiksCube,
  threeByRubiksCube,
  pepesAdventure,
  matrixRain,
  typer,
  spaceAnimation,
  findTheTreasureTwo,
  AstroJumperGame,
  AstroJumperGameLogo,
  logo,
  vroomVroomGame,
  factorialSquares,
  factorialTree,
  recursiveAnimation,
}


/*
*
* DISREGARD ANY FUNCTIONS BELOW
*
*/
// function renderDropdown() {
//   const dropdownElem = document.getElementById('dropdown');
//   dropdownElem.innerHTML = '';

//   Object.keys(khanProjects).forEach((key) => {
//     const project = khanProjects[key];

//     var option = document.createElement("option");
//     option.text = project.PROJECT_NAME;
//     dropdownElem.add(option);
//   });
// }
// renderDropdown(khanProjects);

// const dropdownElem = document.getElementById('dropdown');
// dropdownElem.addEventListener('change', switchProject, false);
// function switchProject(e) {
//   const projectName = e.target.value;

//   const projects = Object.values(khanProjects)
//   for (var i = 0; i < projects.length; i += 1) {
//     if (projects[i].PROJECT_NAME === projectName) {
//       const canvas = document.getElementById('canvas')
//       const context = canvas.getContext('2d');
//       context.clearRect(0, 0, canvas.width, canvas.height);


//       chooseProject(projects[i])
//       return
//     }
//   }
//   alert("Project not found")
// }
// renderDropdown();


// function renderLinks() {
//   const links = document.getElementById('links');
//   links.innerHTML = '';

//   Object.keys(khanProjects).forEach((key) => {
//     const project = khanProjects[key];

//     var link = document.createElement("a");
//     link.text = project.PROJECT_NAME;
//     // link.href = `${location.protocol}//${location.host}/${project.PROJECT_NAME}`
//     link.href = `${location}?projectName=${key}`
//     links.appendChild(link);
//     links.appendChild(document.createElement("br"));
//   });
// }
// renderLinks();

function chooseProject(project) {
  if (project && project.main) {
    rerenderPage(project);
    createProcessing(project.main);
  }
}

const projectNames = Object.keys(khanProjects)
const selection = khanProjects[prompt(`Type a project name: ${projectNames.join(',\n')}`)] || Object.values(khanProjects)[0]
chooseProject(selection)

