import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PolicyListComponent} from "./policy-list/policy-list.component";
import {CreatePolicyComponent} from "./create-policy/create-policy.component";
import {UpdatePolicyComponent} from "./update-policy/update-policy.component";


const routes: Routes = [
  {path:'policylist', component: PolicyListComponent},
  {path:'cratepolicy', component:CreatePolicyComponent},
  {path:'updatepolicy', component: UpdatePolicyComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
