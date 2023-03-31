import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  imagePath: string;

  constructor() {
    this.imagePath = '../../assets/photos/Picture2.jpeg';
   }

  ngOnInit(): void {
  }

}
