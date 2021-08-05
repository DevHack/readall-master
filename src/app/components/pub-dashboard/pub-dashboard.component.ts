import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-pub-dashboard',
  templateUrl: './pub-dashboard.component.html',
  styleUrls: ['./pub-dashboard.component.css']
})
export class PubDashboardComponent implements OnInit {
  name: string;
  constructor(private userService:UserServiceService, private router:Router) { }

  ngOnInit() {
    this.name = sessionStorage.getItem('readAllUserName');
    console.log(this.name);
  }

  

}
