import { Book } from './interfaces/book';

export const BOOKS: Book[] = JSON.parse(localStorage.getItem("myKey"));
