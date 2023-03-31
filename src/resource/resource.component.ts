import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  imagePath: string;

  constructor() {
    this.imagePath = '../../assets/photos/Picture1.jpeg';
   }

  ngOnInit(): void {
  }

}
