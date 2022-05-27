import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  details: any = FormGroup;
  hrs: any = [];

  constructor(private service: SharedService, private fb: FormBuilder, private router: Router) { }

  HR_FIRSTNAME: string;
  HR_LASTNAME: string;
  HR_EMAIL: string;
  HR_PW: string;
  HR_ID: string;

  ngOnInit(): void {

    this.details = this.fb.group({

      email: ["", [Validators.required, Validators.email], this.service.validateUsernameNotTaken.bind(this.service)],
      pass: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required]

    })

    //  this.service.getHrList().subscribe((data: any) => {
    //    this.hrs = data;
    //   })

  }


  get fname() {
    return this.details.get('fname')
  }

  get lname() {
    return this.details.get('lname')
  }
  get email() {
    return this.details.get('email')
  }
  get pass() {
    return this.details.get('pass')
  }

  registerSubmit() {

    var val = {
      HR_FIRSTNAME: this.HR_FIRSTNAME,
      HR_LASTNAME: this.HR_LASTNAME,
      HR_EMAIL: this.HR_EMAIL,
      HR_PW: this.HR_PW,
    };
    this.service.addHr(val).subscribe(res => {
      alert(res.toString());
      this.router.navigate(['login']);
    });
  }
}




/*
registerSubmit(data:any){
  
  if(data.email){
      this.hrs.forEach((item:any) => {
        if(item.HR_EMAIL === data.email && item.HR_PW === data.pass){
         localStorage.setItem("isLoggedIn","true");
          this.router.navigate(['login']);
        }
        else{
          console.log("Invalid");
        }
        
      });
  }
}
 
*/
/*
  registerSubmit(data: any) {
    var val = {
      HR_FIRSTNAME: this.HR_FIRSTNAME,
      HR_LASTNAME: this.HR_LASTNAME,
      HR_EMAIL: this.HR_EMAIL,
      HR_PW: this.HR_PW

    };

    this.service.addHr(val).subscribe(res => {

      alert(res.toString());
      this.router.navigate(['login']);
    });
  }

}
*/
