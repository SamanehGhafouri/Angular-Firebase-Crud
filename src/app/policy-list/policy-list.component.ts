import { Component, OnInit } from '@angular/core';
import {Policy} from "../policy.model";
import {PolicyService} from "../policy.service";
import {Router} from "@angular/router";
import {DataPassingService} from "../data-passing.service";

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {
  policies: Policy[];

  constructor(private policyService: PolicyService, private router:Router, private dataPassing: DataPassingService) { }

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
  create(){
    this.router.navigate(['cratepolicy']);

  }

  update(policy: Policy){
    this.dataPassing.policy = policy;
    this.router.navigate(['updatepolicy']);
  }

  delete(id: string){
    this.policyService.deletePolicy(id);
  }

}
