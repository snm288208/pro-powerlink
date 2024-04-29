import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.services';
@Component({
  selector: 'app-standrdpricereport',
  standalone: true,
  imports: [],
  templateUrl: './standrdpricereport.component.html',
  styleUrl: './standrdpricereport.component.scss'
})
export class StandrdpricereportComponent implements OnInit {
  constructor(private apiService: ApiService) { }

  standardPriceList: any;

  ngOnInit(): void {
    this.getstandardPriceDetail();
  }


  getstandardPriceDetail() {
    this.apiService.postApi('https://sandboxapi.benzeen.com/api/StandardPrice/GetStdBucketDetails', { "skuLogID": 5000, "bucketName": null }).subscribe(
      {
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }
    );
  }

}
