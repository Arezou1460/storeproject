import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSubmitted: boolean = false;
  isAlertVisible: boolean = false;
  username: string = "";
  email: string = "";

  @ViewChild("txtUsername") txtUsername?: ElementRef;
  @ViewChild("txtEmail") txtEmail?: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  sendForm() {
    this.isSubmitted = true;
    this.username = this.txtUsername?.nativeElement.value;
    this.email = this.txtEmail?.nativeElement.value;
  }

}

