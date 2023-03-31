export interface Member {
    name: string;
    firstName: string;
    lastName: string;
    certs: string;
    bio: string;
    email: string;
    photoPath: string;
    externalLinks: {
      institutional: string;
      research: string [];
    }
  }