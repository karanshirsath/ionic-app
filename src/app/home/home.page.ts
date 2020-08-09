import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
userData=[]
selectedUser
  constructor(private userService:UserService) {}


ngOnInit(){
this.loadData()
}
refresh(){
  window.location.reload()
}

loadData=()=>{
  console.log("uhbhbhubhj");
  
  this.userData=[]
  this.userService.getUsers().subscribe((res)=>{
    if(res!=null){
      Object.entries(res).map(entry => { 
        let value = entry[1]; 
        value["key"]=entry[0]
        value["toggle"]=false
        this.userData.push(value)
        
    });
    }
   
  },(err)=>{
    console.log(err);
    
  })

}


delete=(key)=>{
this.userService.delete(key).subscribe((res)=>{
  console.log(res);
  this.loadData()
  
  
})

}
update=(user)=>{
  console.log(user);
  
  this.selectedUser=user
}
clear(){
  this.selectedUser=null
  this.loadData()
  
}

}
