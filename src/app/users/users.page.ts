import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  constructor(private fb:FormBuilder,private userService:UserService, private router:Router,private homepage:HomePage) { }
  userForm:FormGroup

  professions=[
    "Public Sector",
    "Private Sector",
    "Others"
  ]
  ngOnInit() {
    this.userForm=this.fb.group({
      name:['',[Validators.required]],
      address:['',[Validators.required]],
      DOB:['',[Validators.required]],
      email:['',[Validators.required]],
      phoneNo:['',[Validators.required]],
      profession:['',[Validators.required]],

    })
  }
  submit=()=>{
    console.log(this.userForm.value);
    this.userService.createUser(this.userForm.value).subscribe(response => {console.log(response);this.gotResponse()})
    
   
  }

 back(){
   console.log("navigate");
   
   
      this.router.navigate(['/home']) 
  }
 
gotResponse=async ()=>{
  await this.back() 
  this.homepage.refresh()
  
}

}
