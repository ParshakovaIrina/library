import { Book } from './interfaces/book';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book()).toBeTruthy();
  });
});
