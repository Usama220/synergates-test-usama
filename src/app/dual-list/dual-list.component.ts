import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Countries } from '../model/list.model';

@Component({
  selector: 'app-dual-list',
  templateUrl: './dual-list.component.html',
  styleUrls: ['./dual-list.component.scss']
})
export class DualListComponent implements OnInit {
  public activeItems = [];
  public userInView: any = [
    { "id": 1, value: "Usama Ali" },
    { "id": 2, value: "Furqaan K" },
    { "id": 3, value: "Shakil Momin" },
    { "id": 4, value: "Zeeshan K" },
    { "id": 5, value: "Siddque R" },
    { "id": 6, value: "Ammad H" },
    { "id": 7, value: "Saira Najam" }
  ];

  public userNotinView = [
    { "id": 8, value: "Abd Rabbo." },
    { "id": 9, value: "Jameel" },
    { "id": 10, value: "Jawdat" },
    { "id": 11, value: "Hatem" },
    { "id": 12, value: "Farooq" },
    { "id": 13, value: "Dastgir" },
    { "id": 14, value: "Ekram" },
    { "id": 15, value: "Ehsanullah" },
  ];
  totalSelectedUsers: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,

  ) { }



  ngOnInit(): void {
    this.showCount();
  }

  public moveToTheRight(): void {

    this.move('userInView', 'userNotinView');
  }

  public moveToTheLeft(): void {

    this.move('userNotinView', 'userInView');
  }

  // move(first: any, second: any) {
  //   Array.prototype.push.apply(first, second);
  //   console.log(first ,second);
  // }


  public move(from: string, to: string): void {
    this[from] = this[from].filter((item: any, i: number) => {
      if (this.isInActiveItems(item)) {
        this[to].push(item);
        return false;
      } else {
        return true;
      }
    });
    this[to].sort((a: any, b: any) => a.id > b.id ? 1 : -1);
    this.activeItems.length = 0;
  }


  public isInActiveItems(eventItem: any): boolean {
    return !!this.activeItems.find(item => item === eventItem);
  }

  public toggleActiveItem(eventItem: any): void {

    if (this.activeItems.find(item => item === eventItem)) {
      this.activeItems = this.activeItems.filter(item => item !== eventItem);
    } else {
      this.activeItems.push(eventItem as never);
    }
  }

  public showCount() {
    console.log(this.userNotinView);
    var count = this.userNotinView.length;
    this.totalSelectedUsers = count;
  }



}
