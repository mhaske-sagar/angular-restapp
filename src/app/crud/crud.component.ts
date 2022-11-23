import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService, us, User } from '../http.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  user:User=new User("",0,"")
  b:us[]=[]
  select:string=""

  constructor(private http:HttpService,private router:Router) { }

  ngOnInit(): void {
    this.getalluser()
  }
  getalluser()
  {
    this.http.getalluser().subscribe(response=>{this.b=response;this.getalluser();})
  }
signup(){
  
  this.http.signup(this.user).subscribe(response=>{
  if (response=="successful")
  {this.router.navigate(["/system"]);
  alert("registation successful")
  
  }
  else
  {  
    alert("name already present ")
  }
  })
}
view()
{
  this.http.view(this.user.name).subscribe(response=>this.user=response)
}
update()
{
  this.http.update(this.user).subscribe(response=>{if (response=="updated")
alert("data updated")})
}
delet()
{
  this.http.del(this.user.name).subscribe(response=>{ 
    if (response=="deleted")
    alert("data deleted")
  })
}
}
