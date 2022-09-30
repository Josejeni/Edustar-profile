import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubserviceService } from 'src/app/service/subservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormControl |any 
  data:any
  formvar:any
  error=0
  password = "secret";
  show = false;
  



  constructor(private subservice:SubserviceService,private router:Router,private fb:FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
    
  }
  onSubmit(){
    if(this.loginForm.valid){
    this.error=0
    this.formvar=new FormData();
    this.formvar.append("username",this.loginForm.get('username').value);
    this.formvar.append("password",this.loginForm.get('password').value);
    console.log("sumbitted",this.formvar );


    
    this.subservice.login(this.formvar).subscribe(arg =>{
    console.log(arg) 
    this.data=arg

    if(this.data.detail){
        console.log("invalid");
        this.error=1 
      } 
    else{
      localStorage.setItem('token',this.data.access_token)
      localStorage.setItem('token_type',this.data.token_type)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Successfully loged in',
        width: '400px',
        timer: 3000,
        heightAuto: false,
        showConfirmButton: false,
        
      })
      this.router.navigate(['/home']); 
    }
      })   
    
  }

}
fieldTextType:any;
toggleFieldTextType() {
  
  this.fieldTextType = !this.fieldTextType;
}

}
