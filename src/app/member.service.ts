import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Member } from './member';
import { MEMBERS } from './mock-members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  getMembers(): Observable<Member[]> {
    const members = of(MEMBERS);
    return members;
  }

  getMember(name: string){
    const member = MEMBERS.find(m => m.name === name)!;
    return of(member);
  }

}
