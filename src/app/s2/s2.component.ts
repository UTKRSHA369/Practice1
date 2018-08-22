import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-s2]',
  templateUrl: './s2.component.html',
  styleUrls: ['./s2.component.css']
})
export class S2Component implements OnInit {
  userName:string="Utkarsha";
  constructor() { }
  isUserNull(){
    if(this.userName=='')
      return true;
    else
      return false;
  }
  ngOnInit() {
  }

}
