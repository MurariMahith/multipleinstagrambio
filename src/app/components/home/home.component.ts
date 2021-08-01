import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/User';

import { Users } from 'src/app/services/UserJson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bioUser : User;
  bioUserNameParam : string = ""; 

  loading : boolean = true;
  userFound : boolean = true;

  instaLink = "https://www.instagram.com/"

  constructor(private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit() {

    this.bioUserNameParam = this.activatedRoute.snapshot.params.name;

    if(Users.find(u => u.userName === this.bioUserNameParam))
    {
      this.bioUser = Users.find(u => u.userName === this.bioUserNameParam)
      this.bioUser.mainProfilLink = this.instaLink + this.bioUser.userName + "/";
    }
    else if(this.bioUserNameParam === "" || this.bioUserNameParam === undefined)
    {
      this.router.navigateByUrl('/get')
    }
    else
    {
      this.userFound = false;
      //this.router.navigateByUrl('/main/dashboard')
    }
    console.log(this.activatedRoute.snapshot.params.name)
  }

}
