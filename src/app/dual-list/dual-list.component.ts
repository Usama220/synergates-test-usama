import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Countries } from '../model/list.model';

@Component({
  selector: 'app-dual-list',
  templateUrl: './dual-list.component.html',
  styleUrls: ['./dual-list.component.scss']
})
export class DualListComponent implements OnInit {
  public countries: Countries[] | undefined;
  public simpleList = [
    [
      { 'name': 'John' },
      { 'name': 'Smith' },
      { 'name': 'George' },
    ],
    [
      { 'name': 'Jennifer' },
      { 'name': 'Laura' },
      { 'name': 'Georgina' },
    ]
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,

  ) {
    
  }



  ngOnInit(): void {
    // this.countries = new Countries();
    // console.log(this.countries.Pakistan , 'this.countries');
    console.log(this.countries ,'this.countries' );
    
  }

  public removeItem(item: any, list: any[]): void {
    list.splice(list.indexOf(item), 1);
  }

}
