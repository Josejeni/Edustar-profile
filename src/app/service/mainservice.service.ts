import { Injectable } from '@angular/core';
import{HttpClient,HttpClientModule,HttpHeaders}from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  
  token:any
  data: any;

  
  constructor(private http:HttpClient) { }
  base="https://edustar-backend.herokuapp.com"
  // base="http://127.0.0.1:8000"

  // token = new HttpHeaders({
  //   // "Authorization":arg.token_type+" "+arg.access_token
  //   "Authorization":localStorage.getItem('token_type')+" "+localStorage.getItem('token')
 
//  });
  login(url:any,data:any){
   
   this.token = new HttpHeaders({
    // "Authorization":arg.token_type+" "+arg.access_token
    "Authorization":localStorage.getItem('token_type')+" "+localStorage.getItem('token')
 
 });
 return this.http.post(this.base+url,data)
    
  }
  profile(url:any){
    return this.http.get(this.base+url,{headers:new HttpHeaders({ "Authorization":localStorage.getItem('token_type')+" "+localStorage.getItem('token')})});
    // return this.http.get(this.base+url);
  }
  update(url:any,data:any){
    console.log(url,data); 
    return this.http.put(this.base+url,data,{headers:new HttpHeaders({ "Authorization":localStorage.getItem('token_type')+" "+localStorage.getItem('token')})});
  }
  general(url:any,data:any){
    console.log(url); 
    return this.http.post(this.base+url,data,{headers:new HttpHeaders({ "Authorization":localStorage.getItem('token_type')+" "+localStorage.getItem('token')})});
  }
  general_info(url:any){
    return this.http.get(this.base+url,{headers:new HttpHeaders({ "Authorization":localStorage.getItem('token_type')+" "+localStorage.getItem('token')})})
  }
  gen(url:any){
    return this.http.get(this.base+url,{headers:new HttpHeaders({ "Authorization":localStorage.getItem('token_type')+" "+localStorage.getItem('token')})});
  }
  academic(url:any,data:any){
    return this.http.post(this.base+url,data)

  }
  staff(url:any,data:any){
    return this.http.post(this.base+url,data)
  }
    udel(path:any){
    return this.http.delete(this.base+path,{headers:this.token})
  }
  pwdresset(data:any,url:any){
    console.log(data);
    console.log(this.base+url,data);
    
    return this.http.post(this.base+url,data)
  }
  pin(data:any,url:any){
    return this.http.post(this.base+url,data)
  }
  pinupdate(data:any,url:any){
    return this.http.put(this.base+url,data)
  }
}