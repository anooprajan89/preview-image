import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private httpClient: HttpClient, private apiService: ApiService) { }
  public accordianVerticalData: any;
  public accordianHorizontalData: any;
  public selectedSort = 'Date created';

  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:any = {};

  ngOnInit(): void {
    this.apiService.getLegentData().subscribe(legentData => this.accordianVerticalData = legentData);
    this.apiService.getManufactureData().subscribe(manufacturingData => this.accordianHorizontalData = manufacturingData);

    this.dropdownList = [
      { item_id: 1, item_text: 'Alofisel' },
      { item_id: 2, item_text: 'Madrid' },
      { item_id: 3, item_text: 'Drug Substance' },
    ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      clearSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
