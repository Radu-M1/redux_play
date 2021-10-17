import { isEven } from "./math";

// it("first test", () => {});

describe("isEven", () => {
  it("should return true if given an even number", () => {
    const result = isEven(2);
    expect(result).toEqual(true);
  });

  it("should return false if given an even odd", () => {
    const result = isEven(3);
    expect(result).toEqual(false);
  });
});
