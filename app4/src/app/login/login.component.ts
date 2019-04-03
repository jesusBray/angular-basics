import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { tap }from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public getForm:FormGroup;
  public user:string;
  public pass:string;
  private obj:any;
  public gedat:string;
  constructor(private formBuld:FormBuilder) { }

  public ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.getForm = this.formBuld.group({
      email: ['',Validators.required],
      pass: ['',Validators.required]
    });

  }
  private var2: any;
  private var3:any;
  onSubmit(){
    this.user = this.getForm.value.email;
    this.pass = this.getForm.value.pass;
    // this.funcObserv();
    // this.ejecutObser(this.obj);
    // this.ejecuteMethod2(this.method2(this.var2));
    // this.executeMethod3(this.method3(this.var3));
    this.method4();
    this.ejecuteMethod4();
  }

  public funcObserv():Observable<any>{
    return this.obj =  Observable.create(num =>{
      num.next(1);
      num.next(2);
      num.next(3);
      setTimeout(()=>{
        num.next(4);
      },3000);
    });
  }

  public ejecutObser(obj: any):any{
    obj.subscribe({
      next: (x: any) => console.log(x)
    });
  }

  var1:any;
  public method1(): Observable<any> {
    return this.var1 = new Observable(
      resp =>{
        resp.next(12);
      }
    ).pipe();
  }

  public ejecuteMethod1(obj: Observable<any>): any{
    obj.subscribe({
      next: x => console.log(x)
    })
  }

  public algo: string;
  public getChangeEvent(value: any): void {
    this.algo = value;
  }

  private vec = [1,2,3,4,5];
  public method2(obj: Observable<any>): Observable<any> {
    return obj = new Observable(
      resp =>{
        resp.next();
      }
    ).pipe(tap(resp=>{
      return resp = 2;
    }))
  }

  public ejecuteMethod2(obj:Observable<any>): void{
    obj.subscribe({
      next: x => console.log(x)
    });
  }


  public method3(obj: any):Observable<any> {
    return obj = new Observable( resp => {
      resp.next(123)
      resp.next(321)
      resp.next(222)
    });
  }

  public executeMethod3(obj: Observable<any>){
    obj.subscribe({
      next: x => console.log(x)
    });
  }

  public var4 :any;
  private var4Alter: any;
  public method4(): Observable<any> {
    return this. var4 = new Observable(
      (resp) => {
        this.var4Alter = 123;
      }
    );
  }

  public ejecuteMethod4(): void {
    this.var4.subscribe({
      next: x => console.log(x)
    });
  }

  

}
