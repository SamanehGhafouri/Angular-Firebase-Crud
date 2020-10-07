import { Component, OnInit } from '@angular/core';
import {Policy} from "../policy.model";
import {PolicyService} from "../policy.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {
  policies: Policy[];
  addPolicies: FormGroup;

  constructor(private policyService: PolicyService, private router:Router) { }

  ngOnInit(){
    this.policyService.getPolicies().subscribe(data => {
      this.policies = data.map(e => {
        return {
          id: e.payload.doc.id,
          ... (e.payload.doc.data() as object)
        } as Policy;
      })
    });

  }
  create(policy: Policy){
    this.policyService.createPolicy(policy);
    this.router.navigate(['cratepolicy']);

  }

  update(policy: Policy){
    this.policyService.updatePolicy(policy);
    this.router.navigate(['updatepolicy']);
  }

  delete(id: string){
    this.policyService.deletePolicy(id);
  }

}
