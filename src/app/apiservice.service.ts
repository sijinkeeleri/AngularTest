import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  private spacexUrl: String = 'https://api.spaceXdata.com/v3/launches?'; 
  constructor(private http: HttpClient) { }
  getSapcexData(limit, launchSuccess, landSuccess, launchYear) {
    return this.http.get(this.spacexUrl+'limit='+limit+'&launch_success='+launchSuccess+'&land_success='+landSuccess+'&launch_year='+launchYear);
  }
}
