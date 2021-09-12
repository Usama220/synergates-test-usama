import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-remove-button',
  templateUrl: './add-remove-button.component.html',
  styleUrls: ['./add-remove-button.component.scss']
})
export class AddRemoveButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// var arr = ['cat','dog','elephant','lion','tiger','mouse'];

// function remove(...toRemove){
//    toRemove.forEach(item => {
//       var index = arr.indexOf(item);
//       if(index != -1){
//           arr.splice(index, 1);
//       }
//    })
// }

// remove('dog', 'lion'); // OR remove(...['dog', 'lion']);
// console.log(arr); 
