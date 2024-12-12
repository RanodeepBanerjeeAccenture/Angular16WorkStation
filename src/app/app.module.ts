import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentModule } from './student/student.module';
import { AccountModule } from './account/account.module';
import { Employee } from './employee';
import { ChildComponent } from './child/child.component';
import { MypipePipe } from './mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ChildComponent,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    AccountModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
