import { ApiUserService } from './../../services/api-user.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate{

  constructor(private router: Router, private authService: ApiUserService) { }

  canActivate(){
  
    return false;
  }




}
