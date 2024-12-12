import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Employee } from './employee';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'myfirstapp';

  Cdata: any;
  getdata(val: any) {
    this.Cdata = val;
  }


  isvalid: boolean = true;
  changevalue(valid: boolean) {
    this.isvalid = valid;
  }


  Students: any[] = [
    {
      'name': 'Rahul Kumar'
    },
    {
      'name': 'Ajeet Kumar'
    },
    {
      'name': 'Rohan Kumar'
    },
    {
      'name': 'Mahesh Kumar'
    },
    {
      'name': 'Chandan Kumar'
    },
    {
      'name': 'Soni Kumar'
    }
  ];




  employees: any[] = [

    {
      employeeid: 1,
      name: "Chandan",
      gender: 'Male',
      age: 27,

    },
    {
      employeeid: 2,
      name: "Rohit",
      gender: 'Male',
      age: 66,

    },
    {
      employeeid: 3,
      name: "Ahana",
      gender: 'Female',
      age: 18,

    },

  ];

  empname: string = "Ranodeep";


  cols: number = 3;
  bdr: number = 5;


  showdata() {
    console.log("EVENT BINDING EXAMPLE")
  }

  show() {
    alert('Hello');
  }





  data: string = 'Ranodeep';
  data1: string = 'Rahul';

}