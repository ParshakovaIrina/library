import { Book } from "../app/interfaces/book";

describe("Book", () => {
  it("should create an instance", () => {
    expect(new Book()).toBeTruthy();
  });
});
