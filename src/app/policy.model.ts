import {Data} from "@angular/router";

export class Policy {
  id: string;
  policyNumber: string;
  creationDate: Data;
  effectiveDate: Date;
  expireDate: Date;
  paymentOption: string;
  policyAmount: number;
  extraInfo: string;
}
