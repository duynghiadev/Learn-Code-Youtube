import { hasPrint } from "./interfaceForClass";

export class Invoice implements hasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ) {}

  print() {
    return `${this.client} owes ${this.amount} dollar(s) for this work: ${this.work}`;
  }
}

export class Payment implements hasPrint {
  constructor(
    readonly recipient: string,
    private job: string,
    public amt: number
  ) {}

  print() {
    return `I owes ${this.recipient} ${this.amt} dollar(s) for this job: ${this.job}`;
  }
}
