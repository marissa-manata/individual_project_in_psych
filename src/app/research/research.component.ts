import { Component, OnInit } from '@angular/core';

import { Topic } from '../research';
import { TOPICS } from '../mock-research';
import { ResearchService } from '../research.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  topics: Topic[] = [];
  selectedTopic?: Topic;
  imagePath: string;

  constructor(private researchService:  ResearchService) { 
    this.imagePath = '../../assets/photos/Picture3.jpeg';
  }

  ngOnInit(): void {
    this.getTopics();
  }

  getTopics(): void {
    this.researchService.getTopics().subscribe(topics => this.topics = topics);
  }

}