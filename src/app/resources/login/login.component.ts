import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sige',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router){}


  ngOnInit(): void {
   
  }
onClick(){ 
    console.log("the user wants to go for SGE")
    this.router.navigate(['/sige'])
  }
}
