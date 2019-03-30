import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gitrepo';
  score: number = 49;
  name: string = "นาย ก";

  student:any = {
    name: "Akarat",
    studentId: "5921600237",
    weight: 60,
    height: 168
  }

  studentlist = [{
    name: "Lose",
    studentId: "5921600333",
    weight: 60,
    height: 168
  },
  {
    name: "Jeney",
    studentId: "5921600222",
    weight: 58,
    height: 158
  },
  {
    name: "Lisa",
    studentId: "5921600111",
    weight: 42,
    height: 170
  },
  {
    name: "Jisoo",
    studentId: "5921600177",
    weight: 44,
    height: 178
  }
  ];

  constructor() {
    this.student.bmi = (this.student.weight / ((this.student.height / 100) * (this.student.height / 100))).toFixed(2);
    this.studentlist.map((object, index) => {
      let obj: any = object;
      obj.bmi = (object.weight / ((object.height / 100) * (object.height / 100))).toFixed(2);
      return obj;
    })
  }

}


