import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../../services/api-user.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  message:string = "";
  messageEnvie:boolean = false;

  private formGroup:FormGroup;
  constructor(private route: Router,private formBuilder:FormBuilder,private service:ApiUserService) { }
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required],
    });
  }

  onSubmit(){
    this.service.getUser(this.formGroup).subscribe(
      datReturn => {
        this.route.navigateByUrl('/account');
        console.log(JSON.stringify(datReturn.token));
        
    },datReturnError =>{
      this.message="Error dato no valido!"
      this.messageEnvie = true;
    })
  }
  

}
