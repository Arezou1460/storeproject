import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm = '';

  todaydate: any;
  
  constructor(activatedRoute: ActivatedRoute, private router: Router, private dateservice: DateService) {

    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) this.searchTerm = params.searchTerm;
    });

   }


  ngOnInit(): void {
    this.todaydate = this.dateservice.showTodayDate();
  }

  search(term: string): void {
    if(term)
    this.router.navigateByUrl('/search/' + term);
  }


}
