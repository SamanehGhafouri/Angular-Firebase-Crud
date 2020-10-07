import {Data} from "@angular/router";

export class Policy {
  id: string;
  constructor(
    id: string,
    private policyNumber: string,
    private policyAmount: number,
    private creationDate: Date,
    private expirationDate: Date,
    private paymentOption: string,
    private extraInfo: string) {

    this.id = id;
  }

  document(): any {
    return {
      policyNumber: this.policyNumber,
      policyAmount: this.policyAmount,
      creationDate: this.creationDate,
      expirationDate: this.expirationDate,
      paymentOption: this.paymentOption,
      extraInfo: this.extraInfo
    }
  }
}
