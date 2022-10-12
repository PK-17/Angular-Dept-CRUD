import { Component, OnInit } from '@angular/core';
import { Idept } from '../idept';
import { DeptService } from '../dept.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find-dept',
  templateUrl: './find-dept.component.html',
  styleUrls: ['./find-dept.component.css']
})
export class FindDeptComponent implements OnInit {

  deptdata:Idept = {id:0, dname:'', location:''}
  id:number=0;

  constructor(private deptservice:DeptService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    const tid = this.activatedroute.snapshot.paramMap.get('id');
    this.id = Number(tid);
    this.deptservice.getDept(this.id).subscribe((data:Idept) => {this.deptdata = data});
  }

}
