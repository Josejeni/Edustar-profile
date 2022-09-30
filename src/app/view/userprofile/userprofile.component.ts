import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubserviceService } from 'src/app/service/subservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  Userprofile:FormGroup|any
  id:any
  data:any

  
  constructor(private subservice:SubserviceService,private activate:ActivatedRoute,private router:Router,private http:HttpClient,private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.id=this.activate.snapshot.params['id']
    console.log(this.id);
    

    this.Userprofile=this.fb.group({
      // id:new FormControl(''),
      name:['',Validators.required],
      age:['',Validators.required],
      gender:['',Validators.required],
      dob:['',Validators.required],
      mailid:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]   
    })
    this.subservice.profile().subscribe((arg:any)=>{
      this.data=arg;
      console.log(this.data);
      if(this.data){
        this.Userprofile.patchValue(this.data)
      }
      // this.Userprofile.patchV

      
      // this.loadData()
    })
  }
  
// loadData(){
//   this.Userprofile=new FormGroup({
//     name:new FormControl(this.data.name),
//     age:new FormControl(this.data.age),
//     gender:new FormControl(this.data.gender),
//     username:new FormControl(this.data.username),
//     mailid:new FormControl(this.data.mailid),
//     dob:new FormControl(this.data.dob),
// })
// }
update(){
  console.log("submited"); 
  this.subservice.update(this.Userprofile.value).subscribe((arg: any)=>{
  this.data=arg;
  alert("Updated")
  this.router.navigate(['/home/userprofile'])
  })
  
}
Back(){
  this.router.navigate(['/home'])
}
deleterec(){
  console.log(this.id);  
  Swal.fire({
    title: 'Are you sure to Delete?',
    showDenyButton: true,
    confirmButtonText: 'Yes',
    denyButtonText: 'No',
    customClass: {
    confirmButton: 'order-2',
    denyButton: 'order-3',
      
    }
  }).then((result) => {
    if (result.isConfirmed) {
      this.subservice.udel().subscribe(arg=>{
        this.data=arg;
        Swal.fire('Deleted!', '', 'success')  
        this.router.navigate(['/login']);
        },);
        // error =>
        // {
          
        //   this.router.navigate(['/login'])});
      
    } 
    else if (result.isDenied) {
      Swal.fire('Canceled', '', 'info')
      this.router.navigate(['/userprofile'])
    }
  })


  }

}

