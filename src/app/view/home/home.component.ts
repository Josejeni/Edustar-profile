import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Home:FormGroup|any
  id:any

  constructor(private route:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
    // this.id=this.route.snapshot.params['id'];
  }
  openUserprofile(){
      this.router.navigate(['home/userprofile'])
  }
  openSchoolprofile(){
    this.router.navigate(['home/schoolprofile'])
    console.log(this.id);
    
  }
  logout(){
    
    this.router.navigate(['/login'])
  }
}

