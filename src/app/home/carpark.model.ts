import { Fault } from "./fault.model";

export class Carpark {
  constructor(
    public id: string,
    public name: string, // address
    public postal: string,
    public imageUrl: string,
    public status?: number,
    public faults?: Fault,
  ) {}
}


  