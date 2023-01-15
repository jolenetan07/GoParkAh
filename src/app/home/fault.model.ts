export class Fault {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public imageUrl: string,
      public timestamp: string,
      public upVotes?: number,
      public downVotes?: number,
      public status?: string,
    ) {}
  }
  
  
    