import { bundle, NgModule } from 'ng-metadata/core';

import { NGComponent } from './ng.component';

@NgModule({
  declarations: [NGComponent]
})
export class NGMetadataModule {}

export default bundle(NGMetadataModule, []).name;
