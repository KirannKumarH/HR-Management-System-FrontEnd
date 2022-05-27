import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  details:any = FormGroup;
  hrs:any =[];
  constructor(private service: SharedService, private fb:FormBuilder, private router:Router) { }

  
  HR_EMAIL: string;
  HR_PW: string;


  ngOnInit(): void {

    this.details = this.fb.group({
     
      email:['',Validators.compose([Validators.required,Validators.email])],
      pass:['',Validators.required],
     
      
   })
 
   this.service.getHrList().subscribe((data:any)=>{
    console.log(data);
   this.hrs = data;
   })
  }

  
  loginSubmit(data:any){
  
    if(data.email){
        this.hrs.forEach((item:any) => {
          if(item.HR_EMAIL === data.email && item.HR_PW === data.pass){
           localStorage.setItem("isLoggedIn","true");
            this.router.navigate(['candidate']);
          }
          else{
            console.log("Invalid");
           
          }
          
        });
    }
    else{
      alert("Invalid credentials");
    }
  }


}
