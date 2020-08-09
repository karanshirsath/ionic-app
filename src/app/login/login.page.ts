import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private alrtCntrlr:AlertController ) { }
loginForm:FormGroup
  ngOnInit() {
    this.loginForm=this.fb.group({
      userName:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }
  async submit(){
    if(this.loginForm.value.userName=="karanshirsath" && this.loginForm.value.password=="karan123"){
this.router.navigate(["home"])
    }
    else{
      const alert = await this.alrtCntrlr.create({
        header: 'Alert',
        subHeader: 'Failed To Login',
        message: 'Please Enter Correct Credentials',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

}
