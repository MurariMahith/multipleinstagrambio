import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Users } from 'src/app/services/UserJson';

@Component({
  selector: 'app-all-bio-items',
  templateUrl: './all-bio-items.component.html',
  styleUrls: ['./all-bio-items.component.scss']
})
export class AllBioItemsComponent implements OnInit {

  constructor() {  }

   list1=["planning","designing","developing","testing"]
   list2 = [];

   bioUser : User;

  ngOnInit() {

    this.bioUser = Users[0];

  }

  updateSequence()
  {
    console.log(this.bioUser.bios)
    console.log("called");
  }


}
