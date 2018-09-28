import { NgModule, ModuleWithProviders } from '@angular/core'


import { SmSharedModule } from './shared/shared.module'
import { SmButtonsModule } from './button/button.module'
import { SmIconsModule } from './icon/icon.module';

export const SMMODULES_GROUP: any[] = [
  SmSharedModule,
  SmButtonsModule,
  SmIconsModule
]

@NgModule({
  imports: [
    SmSharedModule.forRoot(),
    SmButtonsModule.forRoot(),
    SmIconsModule.forRoot(),
  ],
  exports: SMMODULES_GROUP,
})

class SmModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SmModule,
      providers: [],
    }
  }
}


export {
  SmModule
}