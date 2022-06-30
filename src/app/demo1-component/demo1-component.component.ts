import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1-component',
  templateUrl: './demo1-component.component.html',
  styleUrls: ['./demo1-component.component.css']
})
export class Demo1ComponentComponent implements OnInit {
  value:any;
  constructor() { }

  ngOnInit(): void {
    this.value=localStorage.getItem('value')
    console.log(this.value)
  }

}
