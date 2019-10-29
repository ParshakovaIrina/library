import { Book } from './book';

export const BOOKS: Book[] = JSON.parse(localStorage.getItem("myKey"));