import { Component, OnInit } from '@angular/core';

import { Member } from '../member';
import { MEMBERS } from '../mock-members';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[] = [];
  selectedMember?: Member;


  constructor(private memberService:  MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

}
