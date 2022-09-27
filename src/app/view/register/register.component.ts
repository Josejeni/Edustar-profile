import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubserviceService } from 'src/app/service/subservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;
  data:any
  error=0
 

  constructor(private fb:FormBuilder,private subservice:SubserviceService,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      name:['',Validators.required],
      age:['',Validators.required],
      gender:['',Validators.required],
      mailid:['',Validators.email],
      dob:['',Validators.required],
      user_name:['',Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
          // Validators.pattern('(?=.*[0-9]).{10}')
         ]
      ]


    })
  }


  submit(){
    console.log("sumbitted",this.registerForm.value);
    // if (this.loginform.value==null)
    //  console.log("Emty");
    // else{
      
      this.http.post(" https://edustar-backend.herokuapp.com/pwd_encrypt",this.registerForm.value).subscribe(arg=>{
      this.data=arg
      console.log(this.data)
      if(!this.data.detail){
        alert("Successfully submited")
        this.router.navigate(['/login']);
      }
      else{
        this.error=1
      }
      
  })
}

}
