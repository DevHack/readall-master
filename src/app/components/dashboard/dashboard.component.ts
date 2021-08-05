import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accessToken:string;
  idToken:string;
  name: string;
  constructor(private router:Router, private route: ActivatedRoute, private userService: UserServiceService) { }
  fromPairs = function (arr) {
    let i = 0,
    len = arr.length,
    pair,
    obj = {};
    while (i < len) {
        pair = arr[i];
        obj[pair[0]] = pair[1];
        i += 1;
    }
    return obj;
};
  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      let urlFragment:any = this.fromPairs(Array.from(<any>new URLSearchParams(fragment)));
      this.accessToken = urlFragment.access_token;
      this.idToken = urlFragment.id_token;
      //window.history.pushState('', '/', window.location.pathname);
      this.initView();
    })
  }
  getRedirectPath(userRole:string){
    if(userRole.toLowerCase() === 'publisher'){
      return 'pub';
    }
    if(userRole.toLowerCase() === 'author'){
      return 'auth';
    }
    if(userRole.toLowerCase() === 'read'){
      return 'read';
    }
  }

  initView(){
    console.log(jwtDecode(this.accessToken));
    console.log(jwtDecode(this.idToken));
    this.name = (<any>jwtDecode(this.idToken)).name;
    sessionStorage.setItem('readAllUserName', (<any>jwtDecode(this.idToken)).name)
    sessionStorage.setItem('readAllUserId', (<any>jwtDecode(this.idToken)).username);
    this.router.navigate(['/'+this.getRedirectPath(sessionStorage.getItem('readAllLoginRole'))]);
  }
  


}
