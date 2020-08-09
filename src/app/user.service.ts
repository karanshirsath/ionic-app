import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private dbPath="/user"
  constructor(private db:AngularFireDatabase, private http:HttpClient) { 

    this.userRef=db.list(this.dbPath)
  }
userRef:AngularFireList<any>=null
createUser=(user)=>{
// this.userRef.push(user);
// return this.userRef;
return this.http.post('https://userionic-412d7.firebaseio.com/user.json',
user)
}
getUsers=()=>{
  return this.http.get('https://userionic-412d7.firebaseio.com/user.json')
}
delete=(key)=>{
  return this.http.delete('https://userionic-412d7.firebaseio.com/user/'+key+'.json')
}
update=(user,key)=>{
  return this.http.put('https://userionic-412d7.firebaseio.com/user/'+key+'.json',user)
}
}
