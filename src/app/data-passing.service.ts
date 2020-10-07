import { Injectable } from '@angular/core';
import {Policy} from "./policy.model";

@Injectable({
  providedIn: 'root'
})
export class DataPassingService {
  policy: Policy;

  constructor() { }
}
