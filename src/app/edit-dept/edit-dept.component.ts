import { Component, OnInit } from '@angular/core';
import { DeptService } from '../dept.service';
import { Idept } from '../idept';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-dept',
  templateUrl: './edit-dept.component.html',
  styleUrls: ['./edit-dept.component.css']
})
export class EditDeptComponent implements OnInit {

  deptdata:Idept = { id:0, dname:'', location:'' }
  id:number = 0

  constructor(private deptservice:DeptService, private activatedroute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const tid = this.activatedroute.snapshot.paramMap.get("id");
    this.id = Number(tid);
    this.deptservice.getDept(this.id).subscribe((data:Idept) => {this.deptdata = data})
  }

  saveDept(dept: Idept) {
    this.deptdata = dept;
    this.deptservice.editDept(this.deptdata).subscribe(() => {
      alert("Record Edited Successfully!")
      this.router.navigate(['/list'])
    })
  }

}
