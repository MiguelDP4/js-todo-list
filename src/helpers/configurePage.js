import { DomModule } from '../helpers/domManipulation';
import { projectModule } from '../project/projectModule';

export const ConfigurePage = (() => {
  const InitializeCreateProjectButton = () => {    
    DomModule.addOnClickListener('new-project', projectModule.createProject);
  };

  const drawProject = (projectIndex) => {
    let thisProject = projectModule.getProjectByIndex(projectIndex);
    let projectContainer = document.getElementById('project-container');
    let projectTitle =  DomModule.addHtmlHeading([], thisProject.getTitle(), 2)
    projectContainer.append(projectTitle);
  };

  const drawProjectButton = (projectElement) => {    
    let newListItem  = DomModule.addHtmlListItem(['nav-item']);
    let newAnchor  = DomModule.addHtmlAnchor(['nav-link'], '#', projectElement.getTitle());
    newAnchor.id = `link-project-${projectElement.getIndex()}`;
    newListItem.append(newAnchor);
    let projectList = document.getElementById('project-list');
    projectList.append(newListItem);
    DomModule.addOnClickListener(newAnchor.id, drawProject, projectElement.getIndex());
  };

  return { InitializeCreateProjectButton, drawProjectButton, drawProject };
})();
