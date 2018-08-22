import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  Logs=[];

  constructor() { }

  ngOnInit() {
  }
  saveLog(){
    this.Logs.push(Date.now());
  }
}
