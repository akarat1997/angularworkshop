import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList = [{
    pId: "0001",
    pname: "แปรงสีฟัน",
    pCost: 200
  },
  {
    pId: "0002",
    pname: "แก้วน้ำ",
    pCost: 10
  },
  {
    pId: "0003",
    pname: "ยาสีฟัน",
    pCost: 20
  }]

  constructor() {
  }

}


