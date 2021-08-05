import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-readall-header',
  templateUrl: './readall-header.component.html',
  styleUrls: ['./readall-header.component.css']
})
export class ReadallHeaderComponent implements OnInit {
  roles: string[] = ['publisher', 'author', 'reader'];
  constructor(public router: Router, public route:ActivatedRoute) { }

  ngOnInit() {
  }
  doLogin(role:string){
    sessionStorage.setItem('readAllLoginRole', role);
    window.location.href = 'https://readallpool.auth.us-east-2.amazoncognito.com/login?client_id=toh7sto1m8l7qh1ljqos383tv&response_type=token&scope=email+openid+profile&redirect_uri='+window.location.origin+'/callback';
  }
  doSignOut(){
    window.location.href = 'https://readallpool.auth.us-east-2.amazoncognito.com/logout?client_id=toh7sto1m8l7qh1ljqos383tv&logout_uri='+window.location.origin+'/signout';
  }


}
