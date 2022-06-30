import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {
  organizationForm:any;
  playerName:any;
  constructor(private _router:Router) { }

  ngOnInit(): void {

  }
  enter(event:any){
    this.playerName=event.target.value
    this._router.navigateByUrl('/demo1')
    localStorage.setItem('value',this.playerName)
    this._router.postRequest('url',this.playerName).subscribe((evnt:any)=>{
    })
  }
}
