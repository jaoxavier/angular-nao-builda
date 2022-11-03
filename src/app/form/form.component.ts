import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';
import { Carro } from '../model/Carro';
import { Conta } from '../model/Conta';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public userForm: FormGroup;
  firstName = "";
  lastName = "";
  CNH = "";

  constructor(
    private fb: FormBuilder,
    private cs: ConfigService
  ) {
    this.userForm=this.fb.group({
      firstName: "",
      lastName: "",
      CNH: ""
    });
  }

  ngOnInit(): void {
    this.cs.getData();
  }

  setValue(){
    this.firstName = this.userForm?.get('firstName')?.value;
    this.lastName = this.userForm?.get('lastName')?.value;
    this.CNH = this.userForm?.get('CNH')?.value;
    const conta = new Conta(this.firstName, this.lastName, this.CNH);
    
  }



}
