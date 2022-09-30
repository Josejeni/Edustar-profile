import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/service/mainservice.service';
import { SubserviceService } from 'src/app/service/subservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  ForgotpasswordForm !:FormGroup
  constructor(private fb : FormBuilder, private subservice: SubserviceService,private mainservice:MainserviceService,private router:Router) { 
    this.ForgotpasswordForm = this.fb.group({
      email:[''],
      pin:[''],
      password:['',[
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ]]
    })

  }
 
  ngOnInit(): void {
  }
  data:any
  datapwd:any

submit(){
  this.subservice.pwdreset(this.ForgotpasswordForm.value).subscribe(arg=>{
    this.data=arg
    if (this.data.detail){
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Invalid mail id',
        width: '400px',
        timer: 5000,
        heightAuto: false,
        showConfirmButton: false,
        
      })
    }
    else{
      alert(this.data.msg);
      this.router.navigate(['/forgotpassword']);
    }
  })
}

pincheck(){
  this.subservice.pin(this.ForgotpasswordForm.value).subscribe((arg:any)=>{
    this.data=arg
    this.datapwd=this.ForgotpasswordForm.value
    console.log(this.datapwd['password'])
    console.log(this.data.password)
    if (!this.data.detail){
      this.subservice.pinupdate(this.data).subscribe((arg:any)=>{
      })
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Successfully changed',
        width: '400px',
        timer: 2000,
        heightAuto: false,
        showConfirmButton: false,
        
      })
      this.router.navigate(["/login"])
    }
    
    else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Invalid OTP',
        width: '400px',
        timer: 5000,
        heightAuto: false,
        showConfirmButton: false,
        
      })
      this.router.navigate(['/forgotpassword'])
    }
  })
}

}
