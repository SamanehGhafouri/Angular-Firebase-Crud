import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PolicyService} from "../policy.service";
import {Policy} from "../policy.model";
import {createAotCompiler} from "@angular/compiler";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {
  policyForm: FormGroup;
  policies: Policy[];

  constructor(private policyService:PolicyService, private router:Router) { }

  createPolicy(addPolicies: Policy){
    this.policyService.createPolicy(addPolicies);
  }

  ngOnInit(){
    this.policyForm = new FormGroup({
      policyNumber: new FormControl(),
      policyAmount: new FormControl(),
      creationDate: new FormControl(),
      expirationDate: new FormControl(),
      paymentOption: new FormControl(),
      extraInfo: new FormControl()
    });
  }
  submitPolicy(){
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
