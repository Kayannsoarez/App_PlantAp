declare namespace ApiTypes {
    export interface ResponseObject<T> {
      result?: T;
      errorMessage?: string;
      timeGenerated?: Date;
    }
  
    export interface Link {
      href: string;
      rel: string;
      method: string;
    }
  
    export interface ResponseArray<T> {
      result?: { data: T[]; links?: Link[] };
      errorMessage?: string;
      timeGenerated?: Date;
    }
  }
