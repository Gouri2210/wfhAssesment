import { Component } from '@angular/core';
import { filter, first, map, skip, take } from 'rxjs';
import { DataService } from 'src/app/MyService/data.service';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class APIDataComponent {
  public id:any;
  public readDt:any=[];
  constructor(private apiService : DataService)
  {
    this.apiService.getDataFun()
    .subscribe((limitedData: any) => {
      this.readDt = limitedData;
      console.log(this.readDt);
    });  

  
}
}