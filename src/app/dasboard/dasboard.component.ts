import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../apiservice.service';
@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {

  constructor(private apiService: APIServiceService) { }
  spaceXData: Object ;
  limit: String = '100';
  launchSuccess: Boolean = true;
  landSuccess: Boolean = true;
  launchYear: String = '';
  nodata: Boolean= false; 
  ngOnInit() {
    this.ShowSpacexData();
  }
  ShowSpacexData() {
    this.nodata = false;
    this.apiService.getSapcexData(this.limit,this.landSuccess,this.landSuccess,this.launchYear).subscribe(data => {
      console.log(data);
      this.spaceXData = data;
      console.log(Object.keys(this.spaceXData).length); 
      if(Object.keys(this.spaceXData).length < 1){
        this.nodata = true;
      } else {
        this.nodata = false;
      }
    });
  }
  getValue(pthis){
    if(pthis.name == 'launchYear'){
      this.launchYear = pthis.value;
    }
    if(pthis.name == 'launchSuccess'){
      this.launchSuccess = pthis.checked;     
    }
    if(pthis.name == 'landSuccess'){
      this.landSuccess = pthis.checked;
    }
    this.ShowSpacexData();
  }

}
