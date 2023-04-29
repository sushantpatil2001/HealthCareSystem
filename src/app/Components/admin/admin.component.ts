import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


  appointments :any;
  constructor(private http: HttpClient) {

  }
  ngOnInit(){
    this.http.get('https://localhost:7295/api/AppointmentLists').subscribe((result: any) => {
      console.log(result);
      this.appointments = result;

    })
  }

}

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface Appointment {
//   id: number;
//   custName: string;
//   diagCenName: string;
//   doa: Date;
//   appointmentStatus: string;
// }

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent implements OnInit {

//   appointments!: Appointment[];

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.http.get<Appointment[]>('https://localhost:7295/api/AppointmentLists')
//       .subscribe(data => {
//         this.appointments = data;
//       });
//   }

//   approveAppointment(appointment: Appointment): void {
//     appointment.appointmentStatus = 'Approved';
//     this.http.put(`https://localhost:7295/api/AppointmentLists/${appointment.id}`, appointment)
//       .subscribe();
//   }

//   rejectAppointment(appointment: Appointment): void {
//     appointment.appointmentStatus = 'Rejected';
//     this.http.put(`https://localhost:7295/api/AppointmentLists/${appointment.id}`, appointment)
//       .subscribe();
//   }

// }

