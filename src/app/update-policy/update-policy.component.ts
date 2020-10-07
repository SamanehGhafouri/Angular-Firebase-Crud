import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PolicyService} from "../policy.service";
import {Router} from "@angular/router";
import {Policy} from "../policy.model";
import {DataPassingService} from "../data-passing.service";

@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent implements OnInit {
  policyForm: FormGroup;

  constructor(private router: Router, private policyService: PolicyService, private dataPassing: DataPassingService) { }

  ngOnInit(){

    if (!this.dataPassing.policy) {
      this.router.navigate(['policylist'])
      return;
    }

    this.policyForm = new FormGroup({
      policyNumber: new FormControl(this.dataPassing.policy.policyNumber),
      policyAmount: new FormControl(this.dataPassing.policy.policyAmount),
      creationDate: new FormControl(this.dataPassing.policy.creationDate),
      expirationDate: new FormControl(this.dataPassing.policy.expirationDate),
      paymentOption: new FormControl(this.dataPassing.policy.paymentOption),
      extraInfo: new FormControl(this.dataPassing.policy.extraInfo)
    });
  }
  updatePolicy(){
    const policy = new Policy(
      this.dataPassing.policy.id,
      this.policyForm.value.policyNumber,
      this.policyForm.value.policyAmount,
      this.policyForm.value.creationDate,
      this.policyForm.value.expirationDate,
      this.policyForm.value.paymentOption,
      this.policyForm.value.extraInfo
    );
    this.policyService.updatePolicy(policy);
    this.router.navigate(['policylist']);
  }

}
