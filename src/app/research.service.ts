import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Topic } from './research';
import { TOPICS } from './mock-research';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor() { }

  getTopics(): Observable<Topic[]> {
    const topics = of(TOPICS);
    return topics;
  }

  getTopic(code: string){
    const topic = TOPICS.find(t => t.code === code)!;
    return of(topic);
  }

}