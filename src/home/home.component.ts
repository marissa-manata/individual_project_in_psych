import { Component, OnInit } from '@angular/core';

import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  members: Member[] = [];
  imagePath: string;

  constructor(private memberService: MemberService) { 
    this.imagePath = '../../assets/photos/Picture4.jpeg';
  }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

}
