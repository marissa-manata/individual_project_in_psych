export interface Topic{
    code: string;
    name: string;
    publications: {
        code: string;
        bookbool: boolean;
        authors: string;
        year: string;
        article: string;
        periodical: string;
        volume: string;
        issue: string;
        editors: string;
        book: string;
        pages: string;
        publisher: string;
        link: string;} [];
  }