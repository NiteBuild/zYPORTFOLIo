export class Provider {
    id:number | undefined;
    name:string | undefined;
    leadTime:number | undefined; //days
    email:string | undefined;

  constructor(
    id?: number, 
    name?: string, 
    leadTime?: number, 
    email?: s