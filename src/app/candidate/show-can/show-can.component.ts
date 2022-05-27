import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-show-can',
  templateUrl: './show-can.component.html',
  styleUrls: ['./show-can.component.css']
})
export class ShowCanComponent implements OnInit {

  constructor(private service: SharedService) { }

  CandidateList: any = [];

  ModalTitle!: string;
  ActivateAddEditCanComp: boolean = false;
  Filter: string = "";
  CanIdFilter: string = "";
  CanNameFilter: string = "";
  CanEmailFilter: string = "";
  CanSourceFilter: string = "";
  CanStatusFilter: string = "";
  CanPhoneFilter : string ="";
  CanListWithoutFilter: any = [];

  p: any;
  can: any;

  ngOnInit(): void {
    this.refreshCanList();
  }

  addClick() {
    this.can = {
      CAN_ID: 0,
      CAN_NAME: "",
      CAN_EMAIL: "",
      CAN_SOURCE: "",
      CAN_STATUS: "",
      CAN_RESUME: "a.pdf"

    }
    this.ModalTitle = "Enter Candidate details";
    this.ActivateAddEditCanComp = true;

  }

  deleteClick(item) {
    if (confirm('Are you sure??')) {
      this.service.deleteCandidate(item.CAN_ID).subscribe(data => {
        alert(data.toString());
        this.refreshCanList();
      })
    }
  }

  editClick(item) {
    this.can = item;
    this.ModalTitle = "Edit Candidate Details";
    this.ActivateAddEditCanComp = true;
    this.refreshCanList();
  }



  closeClick() {
    this.ActivateAddEditCanComp = false;
    this.refreshCanList();
  }

  refreshCanList() {
    this.service.getCanList().subscribe(data => {
      this.CandidateList = data;
      this.CanListWithoutFilter = data;
    }
    )
  }

  export(){
    this.service.getCanList().subscribe(data => {
      console.log(data);
       const options = {
         fieldSeparator: ',',
         quoteStrings: '"',
         filename:"Candidate",
         decimalSeparator: '.',
         showLabels: true,
         showTitle: true,
         title: 'Candidate Details',
         useTextFile: false,
         useBom: true,
         useKeysAsHeaders: true,
         // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
       };
 
       const csvExporter = new ExportToCsv(options);
 
       csvExporter.generateCsv(data);
     });
  }

  download(item){   
    this.service.DownloadResume(item.CAN_ID).subscribe(data => {
     
    });
  }

  view(item){   
    this.service.ViewResume(item.CAN_ID).subscribe(data => {
     
    });
  }


  FilterF() {

    // var CanIdFilter = this.CanIdFilter;
    // var CanNameFilter = this.CanNameFilter;
    // var CanEmailFilter = this.CanEmailFilter;
    // var CanSourceFilter = this.CanSourceFilter;
    // var CanStatusFilter = this.CanStatusFilter;
    var Filter = this.Filter;
    this.CandidateList = this.CanListWithoutFilter.filter(function (el) {
      return el.CAN_ID.toString().toLowerCase().includes(
        Filter.toString().trim().toLowerCase()
      ) ||
        el.CAN_NAME.toString().toLowerCase().includes(
          Filter.toString().trim().toLowerCase()
        ) ||
        el.CAN_EMAIL.toString().toLowerCase().includes(
          Filter.toString().trim().toLowerCase()
        )||
        el.CAN_PHONE.toString().toLowerCase().includes(
          Filter.toString().trim().toLowerCase()
        ) ||
        el.CAN_SOURCE.toString().toLowerCase().includes(
          Filter.toString().trim().toLowerCase()
        ) ||
        el.CAN_STATUS.toString().toLowerCase().includes(
          Filter.toString().trim().toLowerCase()
        )

    })
  }


  FilterFn() {

    var CanIdFilter = this.CanIdFilter;
    var CanNameFilter = this.CanNameFilter;
    var CanEmailFilter = this.CanEmailFilter;
    var CanSourceFilter = this.CanSourceFilter;
    var CanStatusFilter = this.CanStatusFilter;
    var CanPhoneFilter = this.CanPhoneFilter;
    var Filter = this.Filter;
    this.CandidateList = this.CanListWithoutFilter.filter(function (el) {
      return el.CAN_ID.toString().toLowerCase().includes(
        CanIdFilter.toString().trim().toLowerCase()
      ) &&
        el.CAN_NAME.toString().toLowerCase().includes(
          CanNameFilter.toString().trim().toLowerCase()
        ) &&
        el.CAN_EMAIL.toString().toLowerCase().includes(
          CanEmailFilter.toString().trim().toLowerCase()
        ) &&
        el.CAN_SOURCE.toString().toLowerCase().includes(
          CanSourceFilter.toString().trim().toLowerCase()
        ) &&
        el.CAN_STATUS.toString().toLowerCase().includes(
          CanStatusFilter.toString().trim().toLowerCase()
        )&&
        el.CAN_PHONE.toString().toLowerCase().includes(
          CanPhoneFilter.toString().trim().toLowerCase()
        )

    })
  }



}
