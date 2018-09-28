import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExDynamicService, DocumentWrapper, WindowWrapper } from '../shared/services'
export function getDocument(): any { return document }
export function getWindow(): any { return window }

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [CommonModule],
  entryComponents: [],
})
export class SmSharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SmSharedModule, providers: [
      ExDynamicService,
      { provide: DocumentWrapper, useFactory: getDocument },
      { provide: WindowWrapper, useFactory: getWindow },
    ]}
  }
}
