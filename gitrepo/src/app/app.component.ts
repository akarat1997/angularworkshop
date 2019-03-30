import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 productList = [{
    pId : "0001",
    pname : "ยาสีฟัน",
    pCost : 50
  },
  {
    pId : "0002",
    pname : "แก้วน้ำ",
    pCost : 50
  },
  {
    pId : "0003",
    pname : "แปรงสีฟัน",
    pCost : 50
  }
  ];
 selectedProduct :any;

  selectProduct(p){
    this.selectedProduct = p;
  }

  constructor() {
  }

}


