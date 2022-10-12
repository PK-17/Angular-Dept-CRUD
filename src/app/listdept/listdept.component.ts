import { Component, OnInit } from '@angular/core';
import { DeptService } from '../dept.service';

@Component({
  selector: 'app-listdept',
  templateUrl: './listdept.component.html',
  styleUrls: ['./listdept.component.css']
})
export class ListdeptComponent implements OnInit {

  deptlist:any[] = []

  constructor(private deptservice:DeptService) { 
    this.deptservice.getDeptList().subscribe(data => { this.deptlist = data })
  }

  ngOnInit(): void {
  }

  

}
