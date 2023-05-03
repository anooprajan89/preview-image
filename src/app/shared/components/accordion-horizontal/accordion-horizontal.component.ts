import { Component, Input, SimpleChanges } from '@angular/core';
import { AccordianHorizontalModel } from '../../models/accordion-horizontal.modal';
import  * as eventData from '../../constants/widget-events' 

@Component({
  selector: 'app-accordion-horizontal',
  templateUrl: './accordion-horizontal.component.html',
  styleUrls: ['./accordion-horizontal.component.scss']
})
export class AccordionHorizontalComponent {
  @Input() accordianHorizontalInput: AccordianHorizontalModel[] = [];

  constructor() { }

  ngOnInit(){
    console.log(eventData.EVENTNAME)
  }

  // Function for expand and collapse accordian content
  toggleAccordian(item: AccordianHorizontalModel) {
    item.isExpanded = !item.isExpanded;
  }

  // Widget action function
  openAction(item: any){
    item.widgetAction = !item.widgetAction;
  }
}
