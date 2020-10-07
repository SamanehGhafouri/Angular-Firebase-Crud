import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Policy} from "./policy.model";

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private firestore: AngularFirestore) { }

  // read: get collection from firestore
  getPolicies(){
    return this.firestore.collection('policies').snapshotChanges();
  }

  // create
  createPolicy(policy: Policy){
    return this.firestore.collection('policies').add(policy.document());
  }

  // update
  updatePolicy(policy: Policy){
    // delete policy.id;
    this.firestore.doc('policies/' + policy.id).update(policy.document());
    // this.firestore.collection('policies').doc(policy.id).update(policy.document());
  }

  // delete
  deletePolicy(policyId: string){
    this.firestore.doc('policies/' + policyId).delete();
  }


}
