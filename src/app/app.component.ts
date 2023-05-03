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
  public fullCardList:any = []
  public selectedFilterCards = []

  cardsFilterDropdownList:any = [];
  cardsFilterDropdownSettings:any= {
    searchPlaceholderText: "search",
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    itemsShowLimit: 3,
    allowSearchFilter: true,
    clearSearchFilter: true,
    enableCheckAll: false,
  }

  ngOnInit(): void {
    this.apiService.getLegentData().subscribe(legentData => this.accordianVerticalData = legentData);
    this.apiService.getSwimlanesData().subscribe((swimLaneData:any) => {
      this.accordianHorizontalData = [];
      swimLaneData.forEach((item:any) => {
        this.fullCardList.push({...item, isExpanded: false});
        this.fullCardList.push({...item.cardList, widgetAction: false});
        this.cardsFilterDropdownList.push({
              item_id: item.id,
              item_text: item.name
            });
        });
    });
  }

  onItemSelect(selectedItem: any) {
    const selectedFullItem = [...this.fullCardList].filter((item)=>item.name === selectedItem.item_text);
    if(selectedFullItem && selectedFullItem.length){
      this.accordianHorizontalData.push(selectedFullItem[0]);
      console.log(this.accordianHorizontalData)
    }
  }
  public onItemDeselect(deselectedItem: any) {
    this.accordianHorizontalData = this.accordianHorizontalData.filter((item:any)=>item.name !== deselectedItem.item_text);
  }

  reset(){
    this.accordianHorizontalData = []
    this.selectedFilterCards = []
  }
}
