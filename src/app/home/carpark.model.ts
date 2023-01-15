export class Carpark {
  constructor(
    public id: string,
    public name: string, // address
    public postal: string,
    public imageUrl: string,
    public upVotes?: number,
    public downVotes?: number,
    public status?: string,
    public uploadedImages?: string,
    
  ) {}
}


  