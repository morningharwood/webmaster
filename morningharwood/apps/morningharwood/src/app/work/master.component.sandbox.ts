import { sandboxOf } from 'angular-playground';
import { WorkMasterComponent } from './master.component';


export default sandboxOf(WorkMasterComponent)
  .add('WorkMasterComponent', {
    template: `<mh-menu-master></mh-menu-master>`,
  });
