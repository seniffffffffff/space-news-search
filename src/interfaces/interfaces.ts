export interface Article {
  events: any[];
  featured: boolean;
  id: number;
  imageUrl: string;
  launches: any[];
  newsSite: string;
  publishedAt: number;
  summary: string;
  title: string;
  updatedAt: string;
  url: string;
}

export interface SearchInput {
  value: string;
}
