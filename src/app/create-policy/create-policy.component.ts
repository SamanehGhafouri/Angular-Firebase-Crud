import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PolicyService} from "../policy.service";
import {Policy} from "../policy.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {
  policyForm: FormGroup;
  policies: Policy[];
  policy: Policy;

  constructor(private policyService:PolicyService, private router:Router) { }

  createPolicy(addPolicies: Policy){
    this.policyService.createPolicy(addPolicies);
  }

  ngOnInit(){
    this.policyForm = new FormGroup({
      policyNumber: new FormControl("",[Validators.required, Validators.minLength(1)]),
      policyAmount: new FormControl("",[Validators.required, Validators.minLength(1)]),
      creationDate: new FormControl("",[Validators.required, Validators.minLength(1)]),
      expirationDate: new FormControl("",[Validators.required, Validators.minLength(1)]),
      paymentOption: new FormControl("",[Validators.required, Validators.minLength(1)]),
      extraInfo: new FormControl("",[Validators.required, Validators.minLength(1)])
    });
  }
  submitPolicy(){
    if(this.policyForm.invalid){
      return
    }
    const policy = new Policy(
      null,
      this.policyForm.value.policyNumber,
      this.policyForm.value.policyAmount,
      this.policyForm.value.creationDate,
      this.policyForm.value.expirationDate,
      this.policyForm.value.paymentOption,
      this.policyForm.value.extraInfo
    );

    this.policyService.createPolicy(policy);
    this.router.navigate(['policylist']);
  }
}
