import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private httpClient: HttpClient, private apiService: ApiService) { }
  public accordianVerticalData: any;
  public accordianHorizontalData: any;
  public selectedSort = 'Date created';

  ngOnInit(): void {
    this.apiService.getLegentData().subscribe(legentData => this.accordianVerticalData = legentData);
    this.apiService.getManufactureData().subscribe(manufacturingData => this.accordianHorizontalData = manufacturingData);
  }

  
	onSelected(value:string): void {
		this.selectedSort = value;
	}
}
