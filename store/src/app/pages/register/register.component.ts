import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formdata: any = {};

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.formdata);
  }

}
