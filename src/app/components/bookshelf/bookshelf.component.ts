import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToAddBook(){
    this.router.navigate(["/addbook"]);
  }
}
