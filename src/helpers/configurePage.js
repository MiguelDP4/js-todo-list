import { DomModule } from '../helpers/domManipulation';
import { projectModule } from '../project/projectModule';

export const ConfigurePage = (() => {
  const InitializeCreateProjectButton = () => {
    
    DomModule.addOnClickListener('new-project', projectModule.createProject);
    
  };

  return { InitializeCreateProjectButton };
})();
