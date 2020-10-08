import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PolicyService} from "../policy.service";
import {Router} from "@angular/router";
import {Policy} from "../policy.model";
import {DataPassingService} from "../data-passing.service";
import {empty} from "rxjs";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent implements OnInit {
  policyForm: FormGroup;
  policy: Policy;

  constructor(private router: Router, private policyService: PolicyService, private dataPassing: DataPassingService) {
  }

  ngOnInit() {

    // if (!this.dataPassing.policy) {
    //   this.router.navigate(['policylist'])
    //   return;
    // }

    this.policyForm = new FormGroup({
      // policyNumber: new FormControl(this.dataPassing.policy.policyNumber),
      // policyAmount: new FormControl(this.dataPassing.policy.policyAmount),
      // creationDate: new FormControl(this.dataPassing.policy.creationDate),
      // expirationDate: new FormControl(this.dataPassing.policy.expirationDate),
      // paymentOption: new FormControl(this.dataPassing.policy.paymentOption),
      // extraInfo: new FormControl(this.dataPassing.policy.extraInfo)

      policyNumber: new FormControl("", [Validators.required, Validators.minLength(1)]),
      policyAmount: new FormControl("", [Validators.required, Validators.minLength(1)]),
      creationDate: new FormControl("", [Validators.required, Validators.minLength(1)]),
      expirationDate: new FormControl("", [Validators.required, Validators.minLength(1)]),
      paymentOption: new FormControl("", [Validators.required, Validators.minLength(1)]),
      extraInfo: new FormControl("", [Validators.required, Validators.minLength(1)])
    });
  }

  updatePolicy() {
    if (this.policyForm.invalid) {
      console.log("Complete the form please");
      return
    }
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
