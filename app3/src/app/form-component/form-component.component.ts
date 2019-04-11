import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserService } from './services-form/user.service'

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})

export class FormComponentComponent implements OnInit {

  //FormGruoup almasena datos entrantes por inputs del html exclusivo para formularios!
  registerForm: FormGroup;
  submitted=false;
  service:UserService;

  constructor( 
    private fromBuilder:FormBuilder    
    ) {};

    createForm(){
      //ingresamos a fromBuilder(FormBuilder) quien desmenusa cada input 
      return this.registerForm = this.fromBuilder.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        Gender:['',Validators.required]
      })
    }

  ngOnInit() {
    this.createForm();
  }

  //strinbufer con hilos
  //stringbuilder mutabilidad
  onSubmit() {
    this.submitted = true;
    //console.log(this.registerForm.value);
    let json = JSON.stringify(this.registerForm.value);
    
    // this.service.addUser(this.registerForm.value).subscribe(user=>{
    //   console.log("add new user");
    // }, error => console.error(error));
    // if (this.registerForm.invalid) {
    //     return alert('Registasdasdsarado!!! :-)');
    // }
    if (this.registerForm.invalid) {
      console.log(`Dato no valido!`);
    }else{
      console.log(`Dato valido!${json}`);
    }
  }

  


}
