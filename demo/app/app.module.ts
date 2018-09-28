import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { SmModule } from '../../src/sm-angular.module'

import { AppComponent } from './app.component';

import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';

const routes : Routes = [
  {
    path:'button',
    component:ButtonComponent
  },
  {
    path:'icon',
    component:IconComponent
  }
];

@NgModule({
   declarations: [
      AppComponent,
      ButtonComponent,
      IconComponent
   ],
   imports: [
      BrowserModule,
      SmModule.forRoot(),
      RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
