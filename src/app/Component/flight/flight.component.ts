import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/Services/apiservices.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  sucess: boolean = true;
  LandSucc: boolean = true;
  showError!: string;

  constructor(private http: ApiservicesService) { }

  flightData: any = []

  ngOnInit() {
    this.http.fetchFlights().subscribe(data => {
      this.flightData = data;
      if (this.flightData.length == 0) {
        this.showError = "No Record Found";
      }
    })
  }

  
  sendYear(year:any): void {
    this.http.fetchAll(year, this.sucess, this.LandSucc).subscribe(data => {
      this.flightData = data;
    })
  }
  sendSuccess(succ:any) {
    this.sucess = succ;
    this.http.fetchLanchSucess(succ).subscribe(data => {
      this.flightData = data;
    })
  }
  LandSuccLuanchSucc(val:any) {
    this.LandSucc = val;
    this.http.fetchLanchSucessAndLandSuccess(val).subscribe(data => {
      this.flightData = data;
    })
  }


}
