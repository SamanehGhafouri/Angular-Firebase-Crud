import {Data} from "@angular/router";

export class Policy {
  id: string;
  constructor(
    id: string,
    private policyNumber: string, private policyAmount: number) {

    this.id = id
  }
  // // id: string;
  // policyNumber: string;
  // creationDate: Data;
  // effectiveDate: Date;
  // expireDate: Date;
  // paymentOption: string;
  // policyAmount: number;
  // extraInfo: string;
  document(): any {
    return {
      policyNumber: this.policyNumber,
      policyAmount: this.policyAmount
    }
  }
}
