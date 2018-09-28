import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SmIconComponent } from './icon.component';

@NgModule({
  declarations: [SmIconComponent],
  exports: [SmIconComponent],
  imports: [CommonModule],
  entryComponents: [SmIconComponent],
})
export class SmIconsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SmIconsModule, providers: [] }
  }
}
