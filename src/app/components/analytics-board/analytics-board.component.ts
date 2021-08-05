import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics-board',
  templateUrl: './analytics-board.component.html',
  styleUrls: ['./analytics-board.component.css']
})
export class AnalyticsBoardComponent implements OnInit {
  @Input('name') name:string;
  
  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToBookshelf(){
    this.router.navigate(['/bookshelf']);
  }

}
