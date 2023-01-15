export class Fault {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public imageUrls: string[],
      public upVotes?: number,
      public downVotes?: number,
      public status?: string,
    ) {}
  }
  
  
    