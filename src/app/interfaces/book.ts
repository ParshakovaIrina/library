export interface Book {
  id: number;
  name: string;
  author: string;
  year: number;
  genre: string;
  description: string;
  image: string;
  selected?: boolean;
}
