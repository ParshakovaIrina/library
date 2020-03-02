import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {colors} from "@angular/cli/utilities/color";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  buyTicketForm: FormGroup;

  constructor() {
    this._createForm();
  }
  private _createForm(){
    this.buyTicketForm = new FormGroup({
      passenger: new FormControl(null),
      passengerAge: new FormControl(null),

      passengerContacts: new FormGroup({
        telegram: new FormControl(null),
        whatsapp: new FormControl(null)
      })
    });
  }
  regict(){
    document.getElementById('op').style.display='none';
    document.getElementById('opp').style.display='inline-block';
  }
  go(){
    document.getElementById('opp').style.display='none';
    document.getElementById('op').style.display='inline-block';
  }
  ngOnInit() {
  }
}
