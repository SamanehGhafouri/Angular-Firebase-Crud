import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PolicyService} from "../policy.service";
import {Policy} from "../policy.model";
import {createAotCompiler} from "@angular/compiler";

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {
  policyForm: FormGroup;
  policies: Policy[];

  constructor(private policyService:PolicyService) { }

  createPolicy(addPolicies: Policy){
    this.policyService.createPolicy(addPolicies);
  }

  ngOnInit(){
    this.policyForm = new FormGroup({
      policyNumber: new FormControl(),
      creationDate: new FormControl(),
      expireDate: new FormControl(),
      policyAmount: new FormControl()
    });
  }
  submitPolicy(){
    const policy = new Policy(
      null,
      this.policyForm.value.policyNumber,
      this.policyForm.value.policyAmount
    );

    this.policyService.createPolicy(policy);
  }
}
