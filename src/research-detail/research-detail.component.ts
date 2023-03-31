import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Topic } from '../research';
import { ResearchService } from '../research.service';

@Component({
  selector: 'app-research-detail',
  templateUrl: './research-detail.component.html',
  styleUrls: ['./research-detail.component.css']
})
export class ResearchDetailComponent implements OnInit {

  @Input() topic?: Topic;
  @Input() pubs?: Topic["publications"];

  constructor(
    private route: ActivatedRoute,
    private researchService: ResearchService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTopic();
  }

  getTopic(): void {
    const code = String(this.route.snapshot.paramMap.get('code'));
    this.researchService.getTopic(code).subscribe(topic => this.topic = topic);
  }

  goBack(): void {
    this.location.back();
  }

}