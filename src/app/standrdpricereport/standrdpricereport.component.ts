import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.services';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-standrdpricereport',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './standrdpricereport.component.html',
  styleUrl: './standrdpricereport.component.scss'
})
export class StandrdpricereportComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  standardPriceList: any;

  columnsToDisplay = ['Inventory Number', 'modelName', 'modelYear', 'inventoryId', 'edenName', 'price', 'mileage',  'createdDate', 'conditionsAndOptions' ,'AcquiredDate', 'acquiredAge'] ;

  ngOnInit(): void {
    this.getstandardPriceDetail();
  }


  getstandardPriceDetail() {
    this.apiService.postApi('https://sandboxapi.benzeen.com/erp/api/StandardPrice/GetStdBucketDetails', { "skuLogID": 5000, "bucketName": null }).subscribe(
      {
        next: (data) =>{
          this.standardPriceList = data.result; 
          console.log(this.standardPriceList);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }
    );
  }

}
