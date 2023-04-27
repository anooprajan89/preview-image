import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionVerticalComponent } from './components/accordion-vertical/accordion-vertical.component';
import { AccordionHorizontalComponent } from './components/accordion-horizontal/accordion-horizontal.component';

@NgModule({
  declarations: [
    AccordionVerticalComponent,
    AccordionHorizontalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionVerticalComponent,
    AccordionHorizontalComponent
  ],
  providers: []
})
export class SharedModule { }
