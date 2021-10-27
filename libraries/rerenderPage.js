function rerenderPage(projectObj) {
  const { PROJECT_NAME, PROJECT_LINK } = projectObj;

  const titleElem = document.getElementById('projectTitle');
  const linkElem = document.getElementById('projectLink');

  titleElem.innerHTML = PROJECT_NAME;
  linkElem.innerHTML = "Khan Academy Project"
  linkElem.setAttribute('href', PROJECT_LINK);
}