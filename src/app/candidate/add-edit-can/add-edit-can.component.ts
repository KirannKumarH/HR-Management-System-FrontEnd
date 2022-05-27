import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-add-edit-can',
  templateUrl: './add-edit-can.component.html',
  styleUrls: ['./add-edit-can.component.css']
})
export class AddEditCanComponent implements OnInit {

  constructor(private service: SharedService) {

  }
  @Input() can: any;
  CAN_ID: string;
  CAN_NAME: string;
  CAN_EMAIL: string;
  CAN_SOURCE: string;
  CAN_STATUS: string;
  CAN_RESUME: string;
  CAN_RESUME_PATH: string;
  CAN_PHONE: string;


  details = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    source: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    resume: new FormControl('', Validators.required)


  })





  ngOnInit(): void {
    this.loadCandidates();
  }

  get name() {
    return this.details.get('name')
  }

  get email() {
    return this.details.get('email')
  }
  get phone() {
    return this.details.get('phone')
  }
  get source() {
    return this.details.get('source')
  }
  get status() {
    return this.details.get('status')
  }
  get resume() {
    return this.details.get('resume')
  }


  loadCandidates() {
    this.CAN_ID = this.can.CAN_ID;
    this.CAN_NAME = this.can.CAN_NAME;
    this.CAN_EMAIL = this.can.CAN_EMAIL;
    this.CAN_PHONE = this.can.CAN_PHONE;
    this.CAN_SOURCE = this.can.CAN_SOURCE;
    this.CAN_STATUS = this.can.CAN_STATUS;
    this.CAN_RESUME = this.can.CAN_RESUME;
    // this.CAN_RESUME_PATH=this.service.ResumeUrl+this.CAN_RESUME;
  }

  addCandidate() {

    if (this.CAN_NAME == '' || this.CAN_EMAIL == '' || this.CAN_PHONE == '' || this.CAN_SOURCE == '' || this.CAN_STATUS == '' || this.CAN_RESUME == '') {
      alert("Please enter all the details")
    }
    else {

      var val = {
        CAN_ID: this.CAN_ID,

        CAN_NAME: this.CAN_NAME,

        CAN_EMAIL: this.CAN_EMAIL,

        CAN_PHONE: this.CAN_PHONE,

        CAN_STATUS: this.CAN_STATUS,

        CAN_SOURCE: this.CAN_SOURCE,

        CAN_RESUME: this.CAN_RESUME

      };

      this.service.addCandidate(val).subscribe(res => {

        alert(res.toString());

      });
    }

  }



  updateCandidate() {
    if (this.CAN_NAME == '' || this.CAN_EMAIL == ''  || this.CAN_PHONE == '' || this.CAN_SOURCE == '' || this.CAN_STATUS == '' || this.CAN_RESUME == '') {
      alert("Please enter all the details")
    }
    else {
      var val = {
        CAN_ID: this.CAN_ID,

        CAN_NAME: this.CAN_NAME,

        CAN_EMAIL: this.CAN_EMAIL,
        
        CAN_PHONE: this.CAN_PHONE,

        CAN_STATUS: this.CAN_STATUS,

        CAN_SOURCE: this.CAN_SOURCE,

        CAN_RESUME: this.CAN_RESUME
      };

      this.service.updateCandidate(val).subscribe(res => {

        alert(res.toString());

      });

    }
  }
/*
  uploadResume(event) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadResume(formData).subscribe((data: any) => {
      this.CAN_RESUME = data.toString();
      this.CAN_RESUME_PATH = this.service.ResumeUrl + this.CAN_RESUME;
      //this.CAN_RESUME_PATH =  "C:\Users\h00kir01\OneDrive - CSG Systems Inc\Desktop\DOT NET WEB API\HMT\Backend\HR_Management_Tool\Resume\ " + this.CAN_RESUME+;
    })
  }
  */
  uploadResume(event) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.CAN_ID);

    this.service.UploadResume(formData).subscribe((data: any) => {
      this.CAN_RESUME = data.toString();
      this.CAN_RESUME_PATH = this.service.ResumeUrl + this.CAN_RESUME;
      //this.CAN_RESUME_PATH =  "C:\Users\h00kir01\OneDrive - CSG Systems Inc\Desktop\DOT NET WEB API\HMT\Backend\HR_Management_Tool\Resume\ " + this.CAN_RESUME+;
    })
  }
}
