import {Data} from "@angular/router";

export class Policy {
  id: string;
  policyNumber: string;
  policyAmount: number;
  creationDate: Date;
  expirationDate: Date;
  paymentOption: string;
  extraInfo: string;


  constructor(
    id: string,
    policyNumber: string,
    policyAmount: number,
    creationDate: Date,
    expirationDate: Date,
    paymentOption: string,
    extraInfo: string) {

    this.id = id;
    this.policyNumber = policyNumber;
    this.policyAmount = policyAmount;
    this.creationDate = creationDate;
    this.expirationDate = expirationDate;
    this.paymentOption = paymentOption;
    this.extraInfo = extraInfo;

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
