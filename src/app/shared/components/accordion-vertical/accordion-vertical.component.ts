import { Component, Input, SimpleChanges } from '@angular/core';
import { AccordianVerticalModel } from '../../models/accordion-vertical.modal';

@Component({
  selector: 'app-accordion-vertical',
  templateUrl: './accordion-vertical.component.html',
  styleUrls: ['./accordion-vertical.component.scss']
})
export class AccordionVerticalComponent {
  @Input() accordianVerticalInput:AccordianVerticalModel | undefined;
  public isExpanded = false;
  public statusData:any;
  public eventData: any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(this.accordianVerticalInput)
    this.statusData = this.accordianVerticalInput?.status;
    this.eventData = this.accordianVerticalInput?.events;
  }

  ngOnInit(): void {
    
  }

  toggleAccordian() {
    this.isExpanded = !this.isExpanded;
  }
}
