import { DomModule } from './domManipulation';
import { projectModule } from './projectModule';

export const ConfigurePage = (() => {
  const InitializeCreateProjectButton = () => {
    DomModule.addOnClickListener('new-project', projectModule.createProject);
  };

  return { InitializeCreateProjectButton };
})();
