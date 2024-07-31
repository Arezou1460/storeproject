import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: string[] = ['/assets/images/1.png', '/assets/images/11.jpg', '/assets/images/21.jpg',
    '/assets/images/31.jpg', '/assets/images/46.jpg', '/assets/images/56.jpg', 
    '/assets/images/66.jpg'];

    
  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  public onMainRedirect() {
    this.router.navigate([""]);
  }

}
