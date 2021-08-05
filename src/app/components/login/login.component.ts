import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRole:string;

  constructor(private router:Router, private route:ActivatedRoute, private elm:ElementRef) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.loginRole = params.role);
    this.elm.nativeElement.querySelector('#loginFrame').src = 'https://readallpool.auth.us-east-2.amazoncognito.com/login?client_id=toh7sto1m8l7qh1ljqos383tv&response_type=token&scope=email+openid+profile&redirect_uri=http://localhost:4200/dashbboard'
  }

  

}
