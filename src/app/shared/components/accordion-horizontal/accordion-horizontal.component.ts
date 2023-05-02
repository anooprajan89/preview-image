import { Component, Input, SimpleChanges } from '@angular/core';
import { AccordianHorizontalModel } from '../../models/accordion-horizontal.modal';

@Component({
  selector: 'app-accordion-horizontal',
  templateUrl: './accordion-horizontal.component.html',
  styleUrls: ['./accordion-horizontal.component.scss']
})
export class AccordionHorizontalComponent {
  @Input() accordianHorizontalInput: AccordianHorizontalModel[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.accordianHorizontalInput)
  }


  // Function for expand and collapse accordian content
  toggleAccordian(item: AccordianHorizontalModel) {
    item.isExpanded = !item.isExpanded
  }
}
