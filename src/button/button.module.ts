import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SmButton } from './button.component'
import { SmButtonGroup } from './button-group.component'


@NgModule({
  declarations: [SmButton, SmButtonGroup],
  exports: [SmButton, SmButtonGroup],
  imports: [CommonModule],
  entryComponents: [SmButton, SmButtonGroup],
})
export class SmButtonsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SmButtonsModule, providers: [] }
  }
}
