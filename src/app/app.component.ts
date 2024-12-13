import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Employee } from './employee';
import { ChildComponent } from "./child/child.component";
import { Router } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation:ViewEncapsulation.None
  providers:[MessageService]
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


  dob = new Date(1986, 8, 2)
  Salary: number = 65000;



  constructor(private router: Router, private _messageService: MessageService) { }
  navigateToComponent1() {
    this.router.navigate(['/component1']);
  }

  msg: string = '';

  ngOnInit(){
    this.msg=this._messageService.getmessage();
  }

}
