import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyrightComponent } from './copyright/copyright.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [CopyrightComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
	CopyrightComponent, FooterComponent
  ]
})
export class PartialsModule { }
