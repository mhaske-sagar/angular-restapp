import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class User{
  constructor(public name:string,public password:number,public mobile:string){}
}
export class us{
  constructor(public name:string,public password:number,public mobile:string){}
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient:HttpClient) { }
signup(user:User)
{
  return this.httpclient.post<String>("http://127.0.0.1:8000/adduser",user)
}
view(name:string)
{
  return this.httpclient.get<User>("http://127.0.0.1:8000/view/"+name)
}
update(user:User)
{
  return this.httpclient.put<String>("http://127.0.0.1:8000/update",user)
}
del(name:string)
{
  return this.httpclient.delete<String>("http://127.0.0.1:8000/delete/"+name)
}
getalluser()
  {
    return this.httpclient.get<us[]>("http://127.0.0.1:8000/getall");
  }

}
