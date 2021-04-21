import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {

  arrayImg = [
    {id:1, img:'1.pmg'},
    {id:2, img:'2.pmg'},
    {id:3, img:'3.pmg'},
    {id:4, img:'4.pmg'}
  ]

  
  constructor() {
    console.log(this.arrayImg[1].id);
   }

  ngOnInit(): void {
  }

}
