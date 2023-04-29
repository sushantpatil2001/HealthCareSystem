import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { connectable } from 'rxjs';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
// TypeScript code
// export class AppointmentComponent{

// }



export class AppointmentComponent {
  diagCenId: string = '';
  DiagCenName: any[] = [];
  testName: any[] = [];
  testId: string = '';


  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.loadCenters();
    this.getTestsByCenters();
    
  }

  loadCenters() {
    this.http.get<any[]>('https://localhost:7295/api/DiagnosticCenters').subscribe((result: any) => {
      //console.log(result);
      this.DiagCenName = result;

    })
  }

  getTestsByCenters() {
    this.http.get('https://localhost:7295/api/DiagnosticCenterTests?id=' + this.diagCenId).subscribe((result: any) => {
      //console.log(result);
      this.testName = result;
      this.func1();
    })

  }
  

  // submit form data to database via api
  submit(myForm:NgForm)
  {
    
    this.http.post('https://localhost:7295/api/AppointmentLists',myForm).subscribe((
      (response)=>
      {
        console.log("Data submitted",response);
      }
    ));
  }

  // DROP DOWN MENU SE NAME SELECT HORA HAI USKO ISS STRING MEI STORE KAR
  // diagName:string = "";
  diagName:string = "";

  // onSelect(event){
  // const value = event.target.value;
  //  this.selected = value;
  //  console.log(value);

  //   //this.diagName=item.diagCenName;
  // }


  func1():void{
    console.log(this.DiagCenName);
    console.log(this.testName);
    console.log(this.diagName);
    this.testName.forEach(i=>{
      if(i.diagCenName==this.diagName)
      {
        console.log(i.testName);
      }
    });
  }



  // diagName: any;
  // onSelected(event: any): void {
  //   this.diagName = event.target.value;
  //   console.log(this.diagName);
  //   this.printTestName();

  // }

  // diagCenTestName: any[] = [];
  // printTestName() {
  //   this.testName.forEach(i => {
  //     if (i.diagCenName == this.diagName) {
  //       this.diagCenTestName[i] = i.testName;
  //     }
  //   });

  //   this.diagCenTestName.forEach(j => {
  //     console.log(this.diagCenTestName[j]);
  //   })
  // }


}



