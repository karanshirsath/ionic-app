import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit{
  @Input() user;
@Output() clear=new EventEmitter()
constructor(private fb:FormBuilder,private userService:UserService) { }
userForm:FormGroup

professions=[
  "Public Sector",
  "Private Sector",
  "Others"
]
ngOnInit() {
  console.log(this.user);
  
  this.userForm=this.fb.group({
    name:[this.user.name,[Validators.required]],
    address:[this.user.address,[Validators.required]],
    DOB:[this.user.DOB,[Validators.required]],
    email:[this.user.email,[Validators.required]],
    phoneNo:[this.user.phoneNo,[Validators.required]],
    profession:[this.user.profession,[Validators.required]],

  })
}
  submit(){
    this.userService.update(this.userForm.value,this.user.key).subscribe((res)=>{
      this.redirect()
      
      
    })
  }
  redirect(){
   this.clear.emit()
  }

}
